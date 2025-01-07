input.onButtonPressed(Button.A, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setAllMotor(100, 100)
    basic.showString("START dopředu")
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setLightMode(wuKong.LightMode.OFF)
    wuKong.stopAllMotor()
    basic.showString("STOP")
})
input.onButtonPressed(Button.B, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setAllMotor(-100, -100)
    basic.showString("START dozadu")
})
basic.showIcon(IconNames.Skull)
basic.showString("Hello Iam on.")
basic.forever(function () {
	
})
