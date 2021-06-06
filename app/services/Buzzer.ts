import gpio from 'rpi-gpio';

const GPIO: number = 40// pin number 40, gpio 21

//クラス
export class Buzzer {
    public async turnOn() {
        gpio.setup(GPIO, gpio.DIR_OUT, () => {
            gpio.write(GPIO, true);
        });
        // await gpio.promise.write(GPIO, false).catch(err => {console.log(err)});
    }
    public async turnOff() {
        gpio.setup(GPIO, gpio.DIR_OUT, () => {
            gpio.write(GPIO, false);
        });
        // await gpio.promise.write(GPIO, false).catch(err => {console.log(err)});
    }
    public async read() {
        return await gpio.promise.read(GPIO).catch(err => {console.log(err)});
    }
}