# A Surveillance system which detects motion then sends a mail to the owner of the system

## Description  
 
The project is designed as a surveillance system that detects motion using the pir sensor and then
send a mail to the registered mail address in the mailer.js file

## Technology 
 
The project was developed using: 
- [Raspberry Pi](http://raspberrypi.org) - [raspbian](https://www.raspbian.org/), Pir sensor
- [Node.js](https://nodejs.org/en/) - for the main application 
 
## Project components 

### Hardware 

```javascript

var Gpio = require("onoff").Gpio;
var LED1 = new Gpio(2, "out");
var LED2 = new Gpio(4, "out");
var LED3 = new Gpio(17, "out");
var pir = new Gpio(27, "in", "both");


```
- Raspberry Pi 
  - I used *Model B+* with *Raspbian* - any model should be Ok, just be careful with the Gpio configuration pin mappings, they can differ 
 

- PIR motion sensor 
  
  - It normally connects to Analog Input (ex. on Arduino); however you can use it with Digital as well if you connect a 10K resistor between VCC & Signal  


- Led 
  - I used a RGB Led

 
