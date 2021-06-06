"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LampLightControl = void 0;
const LedGreen_1 = require("./LedGreen");
const LedRed_1 = require("./LedRed");
const LedYellow_1 = require("./LedYellow");
const SettingFile_1 = require("./SettingFile");
const timeout_1 = require("../unit/timeout");
const NONE = 0;
const GREEN = 1;
const YELLOW = 2;
const RED = 3;
//クラス
class LampLightControl {
    constructor() {
        this.led_green = new LedGreen_1.LedGreen();
        this.led_red = new LedRed_1.LedRed();
        this.led_yellow = new LedYellow_1.LedYellow();
    }
    async setLampLight(color_type, blinking_pattern, lighting_time = 10) {
        // TODO blinking_pattern 点滅パターンに対応
        switch (color_type) {
            case GREEN:
                await this.led_green.turnOn();
                break;
            case YELLOW:
                await this.led_yellow.turnOn();
                break;
            case RED:
                await this.led_red.turnOn();
                break;
            case NONE:
            default:
                await this.led_green.turnOff();
                await this.led_yellow.turnOff();
                await this.led_red.turnOff();
                break;
        }
        if (lighting_time > 0) {
            await timeout_1.timeout(lighting_time * 1000);
            await this.led_green.turnOff();
            await this.led_yellow.turnOff();
            await this.led_red.turnOff();
        }
        const setting_file = new SettingFile_1.SettingFile();
        await setting_file.save({ color_type, blinking_pattern, lighting_time });
        return {
            response: 'success'
        };
    }
}
exports.LampLightControl = LampLightControl;
