import { Buzzer } from './Buzzer'
import { SettingFile } from './SettingFile'
import { timeout } from '../unit/timeout'

//インターフェース
export interface IBuzzerControl {
    response: string;
}

//クラス
export class BuzzerControl {
    public async setBuzzer(flg_buzzer : boolean, buzzer_time : number = 10) : Promise<IBuzzerControl> {
        const buzzer = new Buzzer()
        if (flg_buzzer) {
            console.log(Date.now())
            await buzzer.turnOn()
            if (buzzer_time > 30) buzzer_time = 30
            await timeout(buzzer_time * 1000)
            await buzzer.turnOff()
            console.log(Date.now())
        } else {
            await buzzer.turnOff()
        }
        
        const setting_file = new SettingFile();
        await setting_file.save({flg_buzzer, buzzer_time});
        return {
            response: 'success'
        }
    }
}