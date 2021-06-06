import { LedGreen } from './LedGreen'
import { LedRed } from './LedRed'
import { LedYellow } from './LedYellow'
import { SettingFile } from './SettingFile'
import { timeout } from '../unit/timeout'

const NONE = 0
const GREEN = 1
const YELLOW = 2
const RED = 3

//インターフェース
export interface ILampLightControl {
    response: string;
}

//クラス
export class LampLightControl {
    led_green: LedGreen;
    led_red: LedRed;
    led_yellow: LedYellow;

    public constructor() {
        this.led_green = new LedGreen();
        this.led_red = new LedRed();
        this.led_yellow = new LedYellow();
    }
    public async setLampLight(color_type :number, blinking_pattern: number, lighting_time: number = 10): Promise<ILampLightControl> {

        // TODO blinking_pattern 点滅パターンに対応
        switch (color_type) {
            case GREEN:
                await this.led_green.turnOn()
                break;
            case YELLOW:
                await this.led_yellow.turnOn()
                break;
            case RED:
                await this.led_red.turnOn()
                break;
            case NONE:
            default:
                await this.led_green.turnOff()
                await this.led_yellow.turnOff()
                await this.led_red.turnOff()
                break;
        }
        if (lighting_time > 0) {
            await timeout(lighting_time * 1000)
            await this.led_green.turnOff()
            await this.led_yellow.turnOff()
            await this.led_red.turnOff()
        }
        const setting_file = new SettingFile();
        await setting_file.save({color_type, blinking_pattern, lighting_time});
        return {
            response: 'success'
        } 
    }
}