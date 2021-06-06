"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSsPatrolLampService = void 0;
const LampLightControl_1 = require("./LampLightControl");
const BuzzerControl_1 = require("./BuzzerControl");
const ResetSwitchControl_1 = require("./ResetSwitchControl");
const SettingFile_1 = require("./SettingFile");
//クラス
class ApiSsPatrolLampService {
    async get() {
        const file = new SettingFile_1.SettingFile();
        const settings = file.read();
        // TODO : 現状では、前回の設定状況しか分からないため、現時点での点灯状況なども取得して状態を返すパターンも必要あり。
        console.log("get");
        console.log(settings);
        return settings;
    }
    async setting(params) {
        console.log("settings!!");
        console.log(params);
        const lamp = new LampLightControl_1.LampLightControl();
        const buzzer = new BuzzerControl_1.BuzzerControl();
        lamp.setLampLight(params.color_type, params.blinking_pattern, params.lighting_time);
        buzzer.setBuzzer(params.flg_buzzer, params.buzzer_time);
        return {
            ...params
        };
    }
    async clone() {
        const checkReSetButton = new ResetSwitchControl_1.ResetSwitchControl();
        checkReSetButton.chkChange();
    }
}
exports.ApiSsPatrolLampService = ApiSsPatrolLampService;
