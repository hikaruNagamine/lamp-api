"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buzzer = void 0;
const rpi_gpio_1 = __importDefault(require("rpi-gpio"));
const GPIO = 40; // pin number 40, gpio 21
//クラス
class Buzzer {
    async turnOn() {
        rpi_gpio_1.default.setup(GPIO, rpi_gpio_1.default.DIR_OUT, () => {
            rpi_gpio_1.default.write(GPIO, true);
        });
        // await gpio.promise.write(GPIO, false).catch(err => {console.log(err)});
    }
    async turnOff() {
        rpi_gpio_1.default.setup(GPIO, rpi_gpio_1.default.DIR_OUT, () => {
            rpi_gpio_1.default.write(GPIO, false);
        });
        // await gpio.promise.write(GPIO, false).catch(err => {console.log(err)});
    }
    async read() {
        return await rpi_gpio_1.default.promise.read(GPIO).catch(err => { console.log(err); });
    }
}
exports.Buzzer = Buzzer;
