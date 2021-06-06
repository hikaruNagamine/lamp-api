"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedYellow = void 0;
const rpi_gpio_1 = __importDefault(require("rpi-gpio"));
const LED_PIN = 36; // pin number 36, gpio 16
//クラス
class LedYellow {
    async turnOn() {
        rpi_gpio_1.default.setup(LED_PIN, rpi_gpio_1.default.DIR_OUT, () => {
            rpi_gpio_1.default.write(LED_PIN, true);
        });
        // await gpio.promise.write(LED_PIN, false).catch(err => {console.log(err)});
    }
    async turnOff() {
        rpi_gpio_1.default.setup(LED_PIN, rpi_gpio_1.default.DIR_OUT, () => {
            rpi_gpio_1.default.write(LED_PIN, false);
        });
        // await gpio.promise.write(LED_PIN, false).catch(err => {console.log(err)});
    }
    async read() {
        return await rpi_gpio_1.default.promise.read(LED_PIN).catch(err => { console.log(err); });
    }
}
exports.LedYellow = LedYellow;