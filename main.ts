input.onGesture(Gesture.ScreenUp, function () {
    if (INPUT_MODE == 1) {
        INPUT_MODE = 0
        STORED_MOVE = "" + STORED_MOVE + NEXT_MOVE
        radio.sendString("/ADD" + control.deviceName() + STORED_MOVE)
        basic.showString(STORED_MOVE)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (INPUT_MODE == 1) {
        NEXT_MOVE = "R"
        basic.showArrow(ArrowNames.East)
    }
})
input.onButtonPressed(Button.A, function () {
    INPUT_MODE = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    if (INPUT_MODE == 1) {
        NEXT_MOVE = "L"
        basic.showArrow(ArrowNames.West)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (INPUT_MODE == 1) {
        NEXT_MOVE = "B"
        basic.showArrow(ArrowNames.South)
    }
})
function debug () {
    radio.sendString("#D#" + convertToText(PEER_DATABASE.length))
    for (let index3 = 0; index3 <= PEER_DATABASE.length - 1; index3++) {
        radio.sendString("#D" + convertToText(index3) + PEER_DATABASE[index3])
        basic.pause(100)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    if (INPUT_MODE == 1) {
        NEXT_MOVE = "F"
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.AB, function () {
    STORED_MOVE = STORED_MOVE.substr(0, STORED_MOVE.length - 1)
    radio.sendString("/ADD" + control.deviceName() + STORED_MOVE)
    INPUT_MODE = 0
})
radio.onReceivedString(function (receivedString) {
    led.toggle(0, 0)
    if (receivedString.substr(0, 1) == "/") {
        CMD = receivedString.substr(0, 4)
        ID = receivedString.substr(4, 5)
        if (CMD == "/SET" && ID == control.deviceName()) {
            STORED_MOVE = receivedString.substr(9, receivedString.length - 9)
        }
        if (CMD == "/GET") {
            for (let value of PEER_DATABASE) {
                if (value.substr(0, 5) == ID && value.length > 5) {
                    basic.pause(randint(100, 1000))
                    radio.sendString("/SET" + value)
                }
                basic.pause(randint(100, 1000))
                radio.sendString("/ADD" + value)
            }
        } else {
            if (CMD == "/ADD" || CMD == "/SET") {
                for (let value2 of PEER_DATABASE) {
                    if (value2.substr(0, 5) == ID) {
                        PEER_DATABASE.removeAt(PEER_DATABASE.indexOf(value2))
                        break;
                    }
                }
                PEER_DATABASE.push(receivedString.substr(4, receivedString.length - 4))
            }
        }
    }
    if (control.deviceName() == "pugiv") {
        debug()
    }
    led.toggle(0, 0)
})
input.onButtonPressed(Button.B, function () {
    INPUT_MODE = 0
    N = 0
    while (N <= STORED_MOVE.length) {
        basic.showNumber(N)
        MOVE = STORED_MOVE.substr(N, 1)
        if (MOVE == "F") {
            basic.showArrow(ArrowNames.North,300)
ぼんびっと.まえすすむじかん(800)
            ぼんびっと.とまれ()
        } else if (MOVE == "B") {
            basic.showArrow(ArrowNames.South,300)
ぼんびっと.うしろすすむじかん(800)
            ぼんびっと.とまれ()
        } else if (MOVE == "R") {
            basic.showArrow(ArrowNames.East,300)
ぼんびっと.みぎまわるじかん(900)
            ぼんびっと.とまれ()
        } else if (MOVE == "L") {
            basic.showArrow(ArrowNames.West,300)
ぼんびっと.ひだりまわるじかん(900)
            ぼんびっと.とまれ()
        }
        N += 1
    }
    ぼんびっと.とまれ()
})
let MOVE = ""
let N = 0
let ID = ""
let CMD = ""
let PEER_DATABASE: string[] = []
let NEXT_MOVE = ""
let STORED_MOVE = ""
let INPUT_MODE = 0
radio.setGroup(9)
radio.sendString("/GET" + control.deviceName())
ぼんびっと.まえはやさ(80, 40)
ぼんびっと.うしろはやさ(80, 40)
music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
basic.forever(function () {
    if (INPUT_MODE) {
        basic.showString("")
        basic.showNumber(STORED_MOVE.length)
    } else {
        basic.showNumber(STORED_MOVE.length)
    }
})
