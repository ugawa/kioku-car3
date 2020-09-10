/*

ぼんびっと.みぎまわるじかん(1000)
 * https://makecode.microbit.org/blocks/custom
 * https://makecode.com/defining-blocks
 */
//% weight=100 color=#03AA74 icon="\uf1b9"
namespace ぼんびっと {
    let FR = 80
    let FL = 80
    let BR = 80
    let BL = 80
    let AP0 = 1024
    //% block="まえすすめ"
    //% weight=89
    export function まえすすめ() {
        servos.P1.run(0 - FL)
        servos.P2.run(FR)
    }
    //% block="まえすすむじかん $ms"
    //% weight=88
    //% ms.min=0 ms.max=5000
    //% ms.defl=1000
    export function まえすすむじかん(ms: number) {
        /*miliSeconds = ms*/
        servos.P1.run(0 - FL)
        servos.P2.run(FR)
        basic.pause(ms)
        servos.P1.stop()
        servos.P2.stop()
    }
    //% block="うしろすすめ"
    //% weight=87
    export function うしろすすめ() {
        servos.P1.run(BL)
        servos.P2.run(0 - BR)
    }
    //% block="うしろすすむじかん $ms"
    //% weight=86
    //% ms.min=0 ms.max=5000
    //% ms.defl=1000
    export function うしろすすむじかん(ms: number) {
        servos.P1.run(BL)
        servos.P2.run(0 - BR)
        basic.pause(ms)
        servos.P1.stop()
        servos.P2.stop()
    }
    //% block="ひだりまわれ"
    //% weight=85
    export function ひだりまわれ() {
        servos.P1.run(0 - FL)
        servos.P2.run(0 - FR)
    }
    //% block="ひだりまわるじかん $ms"
    //% weight=84
    //% ms.min=0 ms.max=5000
    //% ms.defl=1000
    export function ひだりまわるじかん(ms: number) {
        servos.P1.run(0 - FL)
        servos.P2.run(0 - FR)
        basic.pause(ms)
        servos.P1.stop()
        servos.P2.stop()
    }
    //% block="みぎまわれ"
    //% weight=83
    export function みぎまわれ() {
        servos.P2.run(FR)
        servos.P1.run(FL)
    }
    //% block="みぎまわるじかん $ms"
    //% weight=82
    //% ms.min=0 ms.max=5000
    //% ms.defl=1000
    export function みぎまわるじかん(ms: number) {
        servos.P2.run(FR)
        servos.P1.run(FL)
        basic.pause(ms)
        servos.P1.stop()
        servos.P2.stop()
    }
    //% weight=80 block="とまれ"
    export function とまれ() {
        servos.P1.stop()
        servos.P2.stop()
        basic.pause(200)
    }
    //% block="センサーみぎ"
    //% weight=78
    export function センサーみぎ(): boolean {
        AP0 = pins.analogReadPin(AnalogPin.P0)
        if (200 < AP0 && AP0 < 500) { /* 390 */
            led.plot(0, 0)
            return true;
        } else {
            led.unplot(0, 0)
            return false;
        }
    }
    //% block="センサーひだり"
    //% weight=76
    export function センサーひだり(): boolean {
        AP0 = pins.analogReadPin(AnalogPin.P0)
        if (600 < AP0 && AP0 < 900) { /*832*/
            led.plot(4, 0)
            return true;
        } else {
            led.unplot(4, 0)
            return false;
        }
    }
    //% block="センサーまえ"
    //% weight=74
    export function センサーまえ(): boolean {
        if (pins.analogReadPin(AnalogPin.P0) < 100) {
            led.plot(0, 0)
            led.plot(4, 0)
            return true;
        } else {
            led.unplot(0, 0)
            led.unplot(4, 0)
            return false;
        }
    }
    //% weight=72 block="ペンあげる"
    export function ペンあげる() {
        basic.pause(200)
        servos.P0.setAngle(140)
        basic.pause(200)
    }
    //% weight=70 block="ペンさげる"
    export function ペンさげる() {
        basic.pause(200)
        servos.P0.setAngle(100)
        basic.pause(200)
    }
    //% block="まえはやさ ひだり $L みぎ $R"
    //% weight=12 
    //% L.min=0 L.max=100
    //% L.defl=80
    //% R.min=0 R.max=100
    //% R.defl=80
    export function まえはやさ(L: number, R: number) {
        FL = R
        FR = L
    }
    //% block="うしろはやさ ひだり $L みぎ $R"
    //% weight=10
    //% L.min=0 L.max=100
    //% L.defl=80
    //% R.min=0 R.max=100
    //% R.defl=80
    export function うしろはやさ(L: number, R: number) {
        BL = R
        BR = L
    }
} 