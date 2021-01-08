let pressureSensor = 0
basic.forever(function () {
    pressureSensor = pins.analogReadPin(AnalogPin.P0)
    if (pressureSensor < 500) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else if (pressureSensor > 578) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            music.playMelody("C5 B C5 B C5 B C5 B ", 1000)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            music.playMelody("C5 B C5 B C5 B C5 B ", 800)
        }
        music.stopAllSounds()
    }
})
