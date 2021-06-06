import gpio, { reset } from 'rpi-gpio';
import axios from 'axios';
import {IApiSsPatrolLamp} from './ApiSsPatrolLampService';

    const BUTTON_PIN: number = 35// pin number 35, gpio 19

let reset_flg: boolean = false;
const RESET_URL: string = 'http://localhost:3000/lamp-api';
const RESET_PARAMETER: IApiSsPatrolLamp = {
        "color_type":0,
        "flg_buzzer": false,
        "blinking_pattern":1,
        "lighting_time":0,
        "buzzer_time":1
    };

//クラス
export class ResetButton {
    public async chkChange() {
        gpio.on('change', async (ch, value) => {
            console.log('read channel : '+ch+', value : '+value);//TODO push reset button.
            if (value === 1 && reset_flg === true) {
                reset_flg = false;
                // TODO reset
                axios.post(RESET_URL, RESET_PARAMETER)
                    .then(function (response) {
                        console.log("reset request done.")
                        console.log(response.data)
                    })
                    .catch(function (error) {
                        console.log("reset request error.")
                        console.log(error)
                    })
                    .then(function () {
                        console.log ("*** reset  ***")
                    })
            } else if (value === 0) {
                reset_flg = true;
            }
        });
        
        gpio.setup(BUTTON_PIN, gpio.DIR_IN, gpio.EDGE_BOTH);
    }
}