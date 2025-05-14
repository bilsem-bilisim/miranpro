input.onButtonPressed(Button.A, function () {
    if (siraaa == 1) {
        radio.sendNumber(1)
    } else if (siraaa == 2) {
        radio.sendNumber(2)
    } else if (siraaa == 3) {
        radio.sendNumber(2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (siraaa == 0) {
        siraaa = 1
    } else if (siraaa == 1) {
        siraaa = 2
    } else if (siraaa == 2) {
        siraaa = 3
    } else if (siraaa == 3) {
        siraaa = 1
    }
})
let siraaa = 0
radio.setGroup(1)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
siraaa = 0
basic.forever(function () {
    if (siraaa == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (siraaa == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (siraaa == 3) {
        basic.showLeds(`
            . . . # #
            . . # . .
            # # . . .
            . . # . .
            . . . # #
            `)
    }
})
basic.forever(function () {
	
})
