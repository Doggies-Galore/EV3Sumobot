/*

    Title: Sumobot
    Srctitle: Sumobotv.uf2
    Version 1.0 Revision 3
    Licence: GNU
    
    Author: VenillaSH

*/

// Establish Variables
let Gameloop = false
let IsCalibrated = false
let time = 70   // Time that a Match lasts, +10 Seconds in case the other bot needs to do something.


function USonicDetection() {
    // Do later 
}

function calibrateUSonicSensor() {
    pause(4000)
    let StartingDistance: number = sensors.ultrasonic2.distance()
    brick.clearScreen()
    IsCalibrated = true
    brick.showNumber(StartingDistance, 1)
    
}
function EdgeDetection(a: number, b: number) {
    if (a == 0) {
        motors.largeBC.tank(-50, -50)
        motors.largeAD.tank(-50, -50)
        pause(b)
        motors.stopAll()
    }
    else if (a == 1) {
        motors.largeBC.tank(50, 50)
        motors.largeAD.tank(50, 50)
        pause(b)
        motors.stopAll()
    }
    else {
        console.log("wtf just happened - Fatal Error")
    }
}

// Edge Detection
sensors.color4.onColorDetected(ColorSensorColor.Black, function () { EdgeDetection(0) })
sensors.color3.onColorDetected(ColorSensorColor.Black, function () { EdgeDetection(1) })

// Ultrasonic
sensors.ultrasonic2.onEvent(UltrasonicSensorEvent.ObjectDetected, function () { USonicDetection() })

// Menu Input Manager
brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () { calibrateUSonicSensor() })  // Calibrate
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () { SumoMatch() })
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    if (!IsCalibrated) {
        brick.showString("Brick is not Calibrated!", 1)
        brick.showString("Calibrate Before Running!", 2)
    }
    else {
        Gameloop = true
        SumoMatch()
    }
})

function SumoMatch() {
    while (Gameloop) {
        // Do later
    }
    return
}
