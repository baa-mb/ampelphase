function gesamtphase () {
    pins.analogWritePin(AnalogPin.P0, 700)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P1, 700)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P3, 700)
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P3, 0)
}
input.onButtonPressed(Button.A, function () {
    gesamtphase()
})
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
