var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "yourmail@yourmail.com",
    pass: "password"
  }
});

var timerId;

module.exports.sendEmail = function() {
  if (timerId) return;

  timerId = setTimeout(function() {
    clearTimeout(timerId);
    timerId = null;
  }, 10000);

  var mailOptions = {
    from: "SMART SURVIELLANCE <mailtosendto@host.com>",
    to: "yourmail@yourmail.com",
    subject: "[Pi Bot] Intruder Detected",
    html:
      "<b>Mr/Mrs/Miss. Your name </b>,<br/><br/>Someone is trying to steal your raspberry pi 3. <br/><br/> At : " +
      Date() +
      " <br/> Love,<br/><i>Pi Bot</i>"
  };
  console.log("Sending an Email now..");

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: " + info.response);
    }
  });
};
