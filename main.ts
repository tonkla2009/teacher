let Sensor4 = false
let Sensor3 = false
let Sensor2 = false
let Sensor1 = false
dadabit.dadabit_init()
wondercam.ChangeFunc(wondercam.Functions.ColorDetect)
basic.pause(500)
basic.forever(function () {
    wondercam.UpdateResult()
    Sensor1 = dadabit.line_followers(dadabit.LineFollowerSensors.S1, dadabit.LineColor.Black)
    Sensor2 = dadabit.line_followers(dadabit.LineFollowerSensors.S2, dadabit.LineColor.Black)
    Sensor3 = dadabit.line_followers(dadabit.LineFollowerSensors.S3, dadabit.LineColor.Black)
    Sensor4 = dadabit.line_followers(dadabit.LineFollowerSensors.S4, dadabit.LineColor.Black)
    if (Sensor2 && Sensor3) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 100)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 100)
    } else if (Sensor1 && Sensor2 && (!(Sensor3) && !(Sensor4))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 50)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 100)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 50)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 100)
    } else if (Sensor3 && Sensor4 && (!(Sensor1) && !(Sensor2))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 50)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 50)
    } else if (Sensor1 && !(Sensor2) && (!(Sensor3) && !(Sensor4))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 40)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 100)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 40)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 100)
    } else if (Sensor4 && !(Sensor1) && (!(Sensor2) && !(Sensor3))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 40)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 40)
    }
})
