"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuzzerControl = void 0;
const Buzzer_1 = require("./Buzzer");
const SettingFile_1 = require("./SettingFile");
const timeout_1 = require("../unit/timeout");
//クラス
class BuzzerControl {
    async setBuzzer(flg_buzzer, buzzer_time = 10) {
        const buzzer = new Buzzer_1.Buzzer();
        if (flg_buzzer) {
            console.log(Date.now());
            await buzzer.turnOn();
            if (buzzer_time > 30)
                buzzer_time = 30;
            await timeout_1.timeout(buzzer_time * 1000);
            await buzzer.turnOff();
            console.log(Date.now());
        }
        else {
            await buzzer.turnOff();
        }
        const setting_file = new SettingFile_1.SettingFile();
        await setting_file.save({ flg_buzzer, buzzer_time });
        return {
            response: 'success'
        };
    }
}
exports.BuzzerControl = BuzzerControl;
