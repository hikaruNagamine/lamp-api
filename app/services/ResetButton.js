"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetButton = void 0;
const rpi_gpio_1 = __importDefault(require("rpi-gpio"));
const axios_1 = __importDefault(require("axios"));
const BUTTON_PIN = 35; // pin number 35, gpio 19
let reset_flg = false;
const RESET_URL = 'http://localhost:3000/lamp-api';
const RESET_PARAMETER = {
    "color_type": 0,
    "flg_buzzer": false,
    "blinking_pattern": 1,
    "lighting_time": 0,
    "buzzer_time": 1
};
//クラス
class ResetButton {
    async chkChange() {
        rpi_gpio_1.default.on('change', async (ch, value) => {
            console.log('read channel : ' + ch + ', value : ' + value); //TODO push reset button.
            if (value === 1 && reset_flg === true) {
                reset_flg = false;
                // TODO reset
                axios_1.default.post(RESET_URL, RESET_PARAMETER)
                    .then(function (response) {
                    console.log("reset request done.");
                    console.log(response.data);
                })
                    .catch(function (error) {
                    console.log("reset request error.");
                    console.log(error);
                })
                    .then(function () {
                    console.log("*** reset  ***");
                });
            }
            else if (value === 0) {
                reset_flg = true;
            }
        });
        rpi_gpio_1.default.setup(BUTTON_PIN, rpi_gpio_1.default.DIR_IN, rpi_gpio_1.default.EDGE_BOTH);
    }
}
exports.ResetButton = ResetButton;
