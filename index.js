/*
 * IoT Project Series #2
 *
 * A Surveillance system which detects motion   
 * then sends a mail to the owner of the system
 *
 * This is a code that runs on node.js
 * and is used to control the Raspberry Pi it connectS to
 *
 * @author Nwachukwu Chibuike <chibuikenwachukwu2016@gmail.com>
 * @copyright 2018 IoT Project Series

*/

var Gpio = require("onoff").Gpio;
var LED1 = new Gpio(2, "out");
var LED2 = new Gpio(4, "out");
var LED3 = new Gpio(17, "out");
var state = 2;

var pir = new Gpio(27, "in", "both");

pir.watch(function(err, value) {
  if (err) exit();
  var blinkInterval = setInterval(blinkLED, 250);

  console.log("Intruder detected");
  console.log("Pi Bot deployed successfully!");
  console.log("Guarding the raspberry pi 3...");

  if (value == 1) require("./mailer").sendEmail();

  setTimeout(endBlink, 15000);

  function endBlink() {
    clearInterval(blinkInterval);
    LED1.writeSync(0);
    LED1.unexport();
    LED2.writeSync(0);
    LED2.unexport();
    LED3.writeSync(0);
    LED3.unexport();

    //included when we are working with sensors
    pir.unexport();
    process.exit();
  }
});

function blinkLED() {
  if (state == 2) {
    if (LED1.readSync() === 0) {
      LED1.writeSync(1);
    } else {
      LED1.writeSync(0);
      state = 4;
    }
  } else if (state == 4) {
    if (LED2.readSync() === 0) {
      LED2.writeSync(1);
    } else {
      LED2.writeSync(0);
      state = 6;
    }
  } else {
    if (LED3.readSync() === 0) {
      LED3.writeSync(1);
    } else {
      LED3.writeSync(0);
      state = 2;
    }
  }
}
