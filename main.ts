input.onGesture(Gesture.ScreenUp, function () {
    if (入力モード == 1) {
        入力モード = 0
        命令文字列 = "" + 命令文字列 + 追加文字列
        radio.sendString("/ADD" + control.deviceName() + 命令文字列)
        basic.showString("" + (命令文字列))
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (入力モード == 1) {
        追加文字列 = "R"
        basic.showArrow(ArrowNames.East)
    }
})
input.onButtonPressed(Button.A, function () {
    入力モード = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    if (入力モード == 1) {
        追加文字列 = "L"
        basic.showArrow(ArrowNames.West)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (入力モード == 1) {
        追加文字列 = "B"
        basic.showArrow(ArrowNames.South)
    }
})
function debug () {
    radio.sendString("#D#" + convertToText(PEERDB.length))
    for (let index3 = 0; index3 <= PEERDB.length - 1; index3++) {
        radio.sendString("#D" + convertToText(index3) + PEERDB[index3])
        basic.pause(100)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    if (入力モード == 1) {
        追加文字列 = "F"
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.AB, function () {
    命令文字列 = 命令文字列.substr(0, 命令文字列.length - 1)
    radio.sendString("/ADD" + control.deviceName() + 命令文字列)
    入力モード = 0
})
radio.onReceivedString(function (receivedString) {
    led.toggle(0, 0)
    if (receivedString.substr(0, 1) == "/") {
        CMD = receivedString.substr(0, 4)
        ID = receivedString.substr(4, 5)
        if (CMD == "/SET" && ID == control.deviceName()) {
            命令文字列 = receivedString.substr(9, receivedString.length - 9)
        }
        if (CMD == "/GET") {
            for (let value of PEERDB) {
                if (value.substr(0, 5) == ID && value.length > 5) {
                    basic.pause(randint(100, 1000))
                    radio.sendString("/SET" + value)
                }
                basic.pause(randint(100, 1000))
                radio.sendString("/ADD" + value)
            }
        } else {
            if (CMD == "/ADD" || CMD == "/SET") {
                for (let value2 of PEERDB) {
                    if (value2.substr(0, 5) == ID) {
                        PEERDB.removeAt(PEERDB.indexOf(value2))
                        break;
                    }
                }
                PEERDB.push(receivedString.substr(4, receivedString.length - 4))
            }
        }
    }
    if (control.deviceName() == "pugiv") {
        debug()
    }
    led.toggle(0, 0)
})
input.onButtonPressed(Button.B, function () {
    入力モード = 0
    N = 0
    while (N <= 命令文字列.length) {
        basic.showNumber(N)
        動き文字 = 命令文字列.substr(N, 1)
        if (動き文字 == "F") {
            basic.showArrow(ArrowNames.North,300)
ぼんびっと.まえすすむじかん(800)
            ぼんびっと.とまれ()
        } else if (動き文字 == "B") {
            basic.showArrow(ArrowNames.South,300)
ぼんびっと.うしろすすむじかん(800)
            ぼんびっと.とまれ()
        } else if (動き文字 == "R") {
            basic.showArrow(ArrowNames.East,300)
ぼんびっと.みぎまわるじかん(900)
            ぼんびっと.とまれ()
        } else if (動き文字 == "L") {
            basic.showArrow(ArrowNames.West,300)
ぼんびっと.ひだりまわるじかん(900)
            ぼんびっと.とまれ()
        }
        N += 1
    }
    ぼんびっと.とまれ()
})
let 動き文字 = ""
let N = 0
let ID = ""
let CMD = ""
let PEERDB: string[] = []
let 追加文字列 = ""
let 命令文字列 = ""
let 入力モード = 0
radio.setGroup(9)
radio.sendString("/GET" + control.deviceName())
ぼんびっと.まえはやさ(80, 40)
ぼんびっと.うしろはやさ(80, 40)
basic.forever(function () {
    if (入力モード) {
        basic.showString("")
        basic.showNumber(命令文字列.length)
    } else {
        basic.showNumber(命令文字列.length)
    }
})
