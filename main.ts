music.play(music.stringPlayable("C F A C5 A G A C5 ", 200), music.PlaybackMode.UntilDone)
while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
	
})
