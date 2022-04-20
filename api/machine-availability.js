const {sendMailUsingMailgun_noTemplate} = require('./email.js');

const headerStyle = `margin-bottom:8px;font-family: Montserrat, sans-serif;font-style: normal;font-weight: 600;font-size: 18px;line-height: 24px;letter-spacing: 1px;text-transform: uppercase;color: #FF8850;`;
const smallHeaderStyle = `margin-bottom:17px;font-family: Montserrat, sans-serif;font-style: normal;font-weight: 600;font-size: 13px;line-height: 24px;letter-spacing: 1px;text-transform: uppercase;color: #FF8850;`;
const largeHeaderStyle = `margin-bottom:24px;font-family: 'Montserrat', sans-serif;font-style: normal;font-weight: 600;font-size: 40px;line-height: 40px;color: #0F2247;`;

const labelWrapperStyle = `margin-bottom:24px;`;
const labelStyle = `display:inline-block;width:80px;font-family: 'Montserrat', sans-serif;font-style: normal;font-weight: 400;font-size: 20px;line-height: 32px;letter-spacing: 0.5px;color: #BAB1A1;`;
const valueStyle = `display:inline-block;font-family: 'Montserrat', sans-serif;font-style: normal;font-weight: 400;font-size: 20px;line-height: 32px;letter-spacing: 0.5px;color: #144372;`;

const requestMachineAvailability = (data) => {
  if(! data) {
    console.error('No data given');
    return;
  }
  if(! data.machine) {
    console.error('No machine given');
    return;
  }

  let message = `
    <div style="background:#F8F8F8;padding:56px 34px;">
      <div>
        <a href="https://www.technologyparkypenburg.nl/" target="_blank"><img src="https://tpy-site.herokuapp.com/static/components/logo/tpy-logo.png" style="display:block;border:none;margin-bottom:62px;" /></a>
      </div>
      <div style="${headerStyle}">
        MACHINE REQUEST
      </div>
      <div style="${largeHeaderStyle}">
        ${data.machine.name}
      </div>
      <div>
        <img src="${data.machine.image}" width="100%" alt="Machine photo" style="margin-bottom:57px;display:block;" />
      </div>
      <div>
        <div style="${labelWrapperStyle}">
          <span style="${labelStyle}">Name</span>
          <span style="${valueStyle}">${data.name}</span>
        </div>
        <div style="${labelWrapperStyle}">
          <span style="${labelStyle}">Email</span>
          <span style="${valueStyle}">${data.email}</span>
        </div>
        <div style="${labelWrapperStyle}">
          <span style="${labelStyle}">Phone</span>
          <span style="${valueStyle}">${data.phone}</span>
        </div>
        <div style="${smallHeaderStyle}">
          PREFERRED DATE
        </div>
  `;

  {[1,2,3,4,5].map(x => {
    if(! data[`preferredDate${x}`])
      return;
    message += `
        <div style="margin-bottom:40px;">
          <div><strong style="${valueStyle};font-weight:bold;margin-bottom:8px;">${data['preferredDate'+x]}</strong></div>
          <span style="display:inline-block;margin-right:12px;"><img src="https://tpy-site.herokuapp.com/static/components/machine-details/checkbox.png" alt="X" style="width: 30px;height:30px;position:relative;top:8px;" /></span> 
          <span style="${valueStyle};margin-right:12px;">${data['preferredDayPart'+x]}</span> 
          <span style="${valueStyle};width:120px;">${data['preferredDuration'+x]}</span> 
        </div>
    `
    return x;
  })}

  message += `
      </div>
  `;


  if(data.message && data.message.length >= 2) {
    message += `
        <div>
          <div style="${labelStyle.replace('inline-block', 'block')};margin-bottom:24px;width:auto;">Message</div>
          <div style="${valueStyle}">${data.message ? data.message.replace("\n", "<br />") : ""}</div>
        </div>
    `;
  }

  if(data.machine && data.machine.company && data.machine.company.contactPhone) {
    message += `
      <div style="${labelStyle)};margin-bottom:24px;width:auto;">Contact info</div>
      Rather call someone right away? <a href="tel:${data.machine.company.contactPhone}">${data.machine.company.contactPhone}</a>
    `;
  }

  message += '</div>';

  const mailToAdmin = sendMailUsingMailgun_noTemplate({
    to: 'bart@tuxion.nl',
    subject: `TPY Availability Check for ${data.machine.name}`,
    message: message
  });

  const mailToUser = sendMailUsingMailgun_noTemplate({
    to: data.email,
    subject: `Copy: TPY Availability for ${data.machine.name}`,
    message: `<div align="center" style="margin-top:20px;margin-bottom:20px;">Below is a copy of your machine availability request.</div>${message}`
  });

  return mailToAdmin;
} 

module.exports = { requestMachineAvailability }
