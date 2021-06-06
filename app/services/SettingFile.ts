// import * as fs from 'fs';
import { promises as fsPromises } from 'fs';

//インターフェース
export interface IFile {
    color_type: number,  // 0:none, 1:green, 2:yellow, 3:red
    flg_buzzer: boolean,  // 0:none, 1:buzzer on
    blinking_pattern: number,  // 0: 常時点灯
    lighting_time: number,  // Default:10sec, 0sec: 無限点灯
    buzzer_time: number  // Default:10sec, Max:30sec
}

const SETTING_FILE_PATH = '/home/pi/lamp-api-main/settings.json'  //'/workspaces/lamp-api/settings.json'
const DEFAULT_SETTINGS = {
    "color_type": 0,
    "flg_buzzer": false,
    "blinking_pattern": 0,
    "lighting_time": 10,
    "buzzer_time": 10
}

//クラス
export class SettingFile {
    public async save(set_setting : any): Promise<IFile> {
        let file = await fsPromises.readFile(SETTING_FILE_PATH, 'utf8')
        let settings = JSON.parse(file)
        settings = {
            ...settings,
            ...set_setting
        }
        await fsPromises.writeFile(SETTING_FILE_PATH, JSON.stringify(settings), 'utf8')
        return settings
    }
    public async read(defaultSetting : boolean = false): Promise<IFile> {
        if (defaultSetting) {
            return DEFAULT_SETTINGS
        }
        // read file setting 
        let file = await fsPromises.readFile(SETTING_FILE_PATH, 'utf8')
        let settings = JSON.parse(file)
        return settings
    }
}