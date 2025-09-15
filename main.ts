dadabit.dadabit_init()
wondercam.ChangeFunc(wondercam.Functions.ColorDetect)
let Sensor1 = dadabit.line_followers(dadabit.LineFollowerSensors.S1, dadabit.LineColor.Black)
let Sensor2 = dadabit.line_followers(dadabit.LineFollowerSensors.S2, dadabit.LineColor.Black)
let Sensor3 = dadabit.line_followers(dadabit.LineFollowerSensors.S3, dadabit.LineColor.Black)
let Sensor4 = dadabit.line_followers(dadabit.LineFollowerSensors.S4, dadabit.LineColor.Black)
basic.pause(500)
basic.forever(function () {
    wondercam.UpdateResult()
    if (Sensor2 && Sensor3) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 100)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 100)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 100)
    } else if (Sensor1 && Sensor2 && (!(Sensor3) && !(Sensor4))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Clockwise, 44)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 44)
        dadabit.setLego360Servo(3, dadabit.Oriention.Clockwise, 44)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 44)
    } else if (Sensor3 && Sensor4 && (!(Sensor1) && !(Sensor2))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 44)
        dadabit.setLego360Servo(2, dadabit.Oriention.Counterclockwise, 44)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 44)
        dadabit.setLego360Servo(4, dadabit.Oriention.Counterclockwise, 44)
    } else if (Sensor1 && !(Sensor2) && (!(Sensor3) && !(Sensor4))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Clockwise, 55)
        dadabit.setLego360Servo(2, dadabit.Oriention.Clockwise, 55)
        dadabit.setLego360Servo(3, dadabit.Oriention.Clockwise, 55)
        dadabit.setLego360Servo(4, dadabit.Oriention.Clockwise, 55)
    } else if (Sensor4 && !(Sensor1) && (!(Sensor2) && !(Sensor3))) {
        dadabit.setLego360Servo(1, dadabit.Oriention.Counterclockwise, 55)
        dadabit.setLego360Servo(2, dadabit.Oriention.Counterclockwise, 55)
        dadabit.setLego360Servo(3, dadabit.Oriention.Counterclockwise, 55)
        dadabit.setLego360Servo(4, dadabit.Oriention.Counterclockwise, 55)
    }
})
