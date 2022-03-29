import { LampLightControl } from './LampLightControl'
import { BuzzerControl } from './BuzzerControl'
import { ResetSwitchControl } from './ResetSwitchControl'
import { SettingFile } from './SettingFile'

//インターフェース
export interface IApiLamp {
    color_type: number,  // 0:none, 1:green, 2:yellow, 3:red
    flg_buzzer: boolean,  // 0:none, 1:buzzer on
    blinking_pattern: number,  // 0: 常時点灯
    lighting_time: number,  // Default:10sec, 0sec: 無限点灯
    buzzer_time: number  // Default:10sec, Max:30sec
}

//クラス
export class ApiLampService {
    public async get(): Promise<IApiLamp> {
        const file = new SettingFile();
        const settings = file.read();
        // TODO : 現状では、前回の設定状況しか分からないため、現時点での点灯状況なども取得して状態を返すパターンも必要あり。
        console.log("get")
        console.log(settings)
        return settings
    }
    public async setting(params: IApiLamp): Promise<IApiLamp> {
        console.log("settings!!")
        console.log(params)
        const lamp = new LampLightControl()
        const buzzer = new BuzzerControl()
        lamp.setLampLight(params.color_type, params.blinking_pattern, params.lighting_time)
        buzzer.setBuzzer(params.flg_buzzer, params.buzzer_time)
        return {
            ...params
        } 
    }
    public async clone(){
        const checkReSetButton = new ResetSwitchControl()
        checkReSetButton.chkChange();
    }
}