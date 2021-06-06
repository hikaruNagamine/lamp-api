"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingFile = void 0;
// import * as fs from 'fs';
const fs_1 = require("fs");
const SETTING_FILE_PATH = '/home/pi/lamp-api-main/settings.json'; //'/workspaces/lamp-api/settings.json'
const DEFAULT_SETTINGS = {
    "color_type": 0,
    "flg_buzzer": false,
    "blinking_pattern": 0,
    "lighting_time": 10,
    "buzzer_time": 10
};
//クラス
class SettingFile {
    async save(set_setting) {
        let file = await fs_1.promises.readFile(SETTING_FILE_PATH, 'utf8');
        let settings = JSON.parse(file);
        settings = {
            ...settings,
            ...set_setting
        };
        await fs_1.promises.writeFile(SETTING_FILE_PATH, JSON.stringify(settings), 'utf8');
        return settings;
    }
    async read(defaultSetting = false) {
        if (defaultSetting) {
            return DEFAULT_SETTINGS;
        }
        // read file setting 
        let file = await fs_1.promises.readFile(SETTING_FILE_PATH, 'utf8');
        let settings = JSON.parse(file);
        return settings;
    }
}
exports.SettingFile = SettingFile;
