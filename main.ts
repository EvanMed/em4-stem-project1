input.onButtonPressed(Button.A, function () {
    if (power_prcentage > 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . #
            `)
        hits += 1
        power_prcentage += -20
    }
})
input.onButtonPressed(Button.AB, function () {
    if (power_prcentage == 100) {
        power_prcentage = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        score += 1
        game.addScore(1)
    } else {
        life += -1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    game.resume()
})
let e_hits = 0
let hits = 0
let power_prcentage = 0
game.pause()
let good_guy = game.createSprite(1, 5)
let bad_guy = game.createSprite(5, 5)
let score = 0
let life = 3
loops.everyInterval(10000, function () {
    if (game.isRunning()) {
        e_hits += 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            `)
    }
})
loops.everyInterval(500, function () {
    if (game.isRunning()) {
        if (power_prcentage < 100) {
            power_prcentage += 2
        }
    }
})
basic.forever(function () {
    if (score == 3) {
        bad_guy.delete()
    }
    if (hits == 3) {
        score += 1
        game.addScore(1)
        hits = 0
    }
    if (e_hits == 3) {
        life += -1
        e_hits = 0
    }
    if (bad_guy.isDeleted()) {
        game.gameOver()
    }
    if (life == 0) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (game.isRunning()) {
        if (power_prcentage == 100) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if (power_prcentage == 80) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # .
                . . . . .
                . . . . .
                `)
        }
        if (power_prcentage == 60) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        }
        if (power_prcentage == 40) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
        }
        if (power_prcentage == 20) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
