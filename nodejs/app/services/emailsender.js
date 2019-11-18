const sgMail = require("@sendgrid/mail")
const config = require("config");
sgMail.setApiKey(config.get("emailProvider"))

exports.sendVerificationMail = (to, code) => {
    const msg = {
        to,
        from: "no-reply@gourmand.com",
        subject: "Verification code",
        text: "Here is your validation code : " + code,
    };
    sgMail.send(msg)
}