const sgMail = require('@sendgrid/mail');

const sendMail = function(from) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'launch@thehaguetech.com',
    from: 'website@thehaguetech.com',
    subject: 'Email from thehaguetech.com',
    html: `${from.name} (${from.email}) sent the following message:<br /><hr /><br />` +
          from.message.replace("\n", '<br/>') + "<br /><br />"
  };
  sgMail.send(msg);
}

const sendMailUsingMailgun = (data) => {
  const api_key = process.env.MAILGUN_API_KEY;
  const domain = 'mg.technologyparkypenburg.nl';
  const mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain,
    host: 'api.eu.mailgun.net'
  });

  const msg = {
    from: data.email || 'info@technologyparkypenburg.nl',
    to: data.to || 'info@technologyparkypenburg.nl',
    bcc: 'bart@tuxion.nl',
    subject: 'Email from technologyparkypenburg.nl',
    html: `${data.name} (${data.email}) sent the following message:<br /><hr /><br />` +
          data.message.replace("\n", '<br/>') + "<br /><br />"
  };
   
  mailgun.messages().send(msg, function (error, body) {
    console.error(error);
    console.log(body);
  });
}

const sendMailUsingMailgun_noTemplate = (data) => {
  const api_key = process.env.MAILGUN_API_KEY;
  const domain = 'mg.technologyparkypenburg.nl';
  const mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain,
    host: 'api.eu.mailgun.net'
  });

  const msg = {
    from: data.email || 'info@technologyparkypenburg.nl',
    to: data.to || 'info@technologyparkypenburg.nl',
    bcc: 'bart@tuxion.nl',
    subject: data.subject || 'Email from technologyparkypenburg.nl',
    html: data.message
  };
   
  mailgun.messages().send(msg, function (error, body) {
    console.error(error);
    console.log(body);
  });
}

module.exports = {
  sendMail,
  sendMailUsingMailgun,
  sendMailUsingMailgun_noTemplate
}
