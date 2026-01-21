basic.forever(function () {
    if (input.acceleration(Dimension.X) < -500) {
        for (let index = 0; index < 1; index++) {
            music.play(music.stringPlayable("E D C D C E D C ", 40), music.PlaybackMode.UntilDone)
            basic.pause(200)
        }
    }
})
