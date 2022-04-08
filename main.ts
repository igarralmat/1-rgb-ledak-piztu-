DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
    basic.pause(200)
})
