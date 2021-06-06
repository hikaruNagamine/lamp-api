import gpio from 'rpi-gpio';

const LED_PIN: number = 38// pin number 38, gpio 20

//クラス
export class LedGreen {
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