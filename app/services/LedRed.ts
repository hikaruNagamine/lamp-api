import gpio from 'rpi-gpio';

const LED_PIN: number = 37// pin number 37, gpio 26

//クラス
export class LedRed {
    public async turnOn() {
        gpio.setup(LED_PIN, gpio.DIR_OUT, () => {
            gpio.write(LED_PIN, true);
        });
        // await gpio.promise.write(LED_PIN, false).catch(err => {console.log(err)});
    }
    public async turnOff() {
        gpio.setup(LED_PIN, gpio.DIR_OUT, () => {
            gpio.write(LED_PIN, false);
        });
        // await gpio.promise.write(LED_PIN, false).catch(err => {console.log(err)});
    }
    public async read() {
        return await gpio.promise.read(LED_PIN).catch(err => {console.log(err)});
    }
}