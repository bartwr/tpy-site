const {requestMachineAvailability} = require('../machine-availability.js');

module.exports = async function (context, req) {
    const contentType = context.bindingData.contentType;
    const slug = context.bindingData.slug;

    const contentful = await require("contentful");

    const client = await contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: process.env["CONTENTFUL_SPACE_ID"],
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: process.env["CONTENTFUL_ACCESS_TOKEN"]
    });

    const accessControlAllowOriginUrl = 'http://localhost:3000';

    switch (contentType) {
        case 'mail/machine-availability':
            const mail = requestMachineAvailability(req.body);
            context.res = {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': accessControlAllowOriginUrl
                },
                body: JSON.stringify(mail, null, 3)
            }
            break;
        case 'mail':
            if (slug === 'contact') {
                let message = req.body.message + '<br /><br /><hr /><br />';
                // Add extra fields, like company name, website, etc)
                if(req.body.name) message += '' + req.body.name + '<br />';
                if(req.body.company) message += '' + req.body.company + '<br />';
                if(req.body.tel) message += '' + req.body.tel + '<br />';
                if(req.body.website) message += '' + req.body.website + '<br />';
                if(req.body.type) message += '<br />💬 I\'m interested in joining the community by ' + req.body.type + '<br />';

                const data = {
                    name: req.body.name,
                    email: req.body.email,
                    tel: req.body.tel,
                    message: message
                };

                const api_key = process.env["MAILGUN_API_KEY"];
                const domain = 'mg.technologyparkypenburg.nl';
                const mailgun = require('mailgun-js')({
                    apiKey: api_key,
                    domain: domain,
                    host: 'api.eu.mailgun.net'
                });

                const msg = {
                    from: data.email || 'info@technologyparkypenburg.nl',
                    to: 'info@technologyparkypenburg.nl',
                    bcc: 'bart@tuxion.nl',
                    subject: 'Email from technologyparkypenburg.nl',
                    html: `${data.name} (${data.email}) sent the following message:<br /><hr /><br />` +
                        data.message.replace("\n", '<br/>') + "<br /><br />"
                };

               const mail = mailgun.messages().send(msg, function (error, body) {
                    console.error(error);
                    console.log(body);
                });

                context.res = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': accessControlAllowOriginUrl
                    },
                    body: JSON.stringify(mail, null, 3)
                }
            }
        break;
        case 'newsletter':
            if (slug === 'add') {
                const Mailchimp = require('mailchimp-api-v3')
                const mailchimp = new Mailchimp(process.env["MAILCHIMP_ID"]);

                const contact = req.body;

                await mailchimp.request({
                    method : 'post',
                    path : '/lists/4dc693a028/members',
                    body : {
                        "email_address": contact.email,
                        "status": "pending",
                        "merge_fields": {
                            "FNAME": contact.fname,
                            "LNAME": contact.lname,
                            "CNAME": contact.cname
                        }
                    }
                }, (data) => {
                    context.res = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': accessControlAllowOriginUrl
                        },
                        body: JSON.stringify({
                            title: data.title,
                            status: data.status
                        }, null, 3)
                    }
                })
            }
        break;
        case 'news':
            if (typeof slug === 'undefined') {
                await client.getEntries({
                    content_type: 'news',
                    limit: 100,
                    order: '-fields.publishDate'
                })
                .then((response) => {
                    context.res = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': accessControlAllowOriginUrl
                        },
                        body: JSON.stringify(response.items, null, 3)
                    }
                })
                .catch((error) => {
                    console.log(`\nError occurred while fetching Entries for news:`);
                    console.error(error)
                });
            } else {
                await client.getEntries({
                    content_type: 'news',
                    'fields.slug': slug,
                    limit: 1
                })
                .then((entry) => {
                    context.res = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': accessControlAllowOriginUrl
                        },
                        body: JSON.stringify(entry.items[0], null, 3)
                    }
                })
                .catch(console.error);
            }
        break;
        case 'events':
            if (typeof slug === 'undefined') {
               await client.getEntries({
                    content_type: 'events',
                    limit: 200,
                    order: 'fields.publishDate'
                })
                .then((response) => {
                    context.res = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': accessControlAllowOriginUrl
                        },
                        body: JSON.stringify(response.items, null, 3)
                    }
                })
                .catch((error) => {
                    console.log(`\nError occurred while fetching Entries for events:`);
                    console.error(error)
                })
            } else {
                await client.getEntries({
                    content_type: 'events',
                    'fields.slug': slug,
                    limit: 1
                })
                .then((entry) => {
                    context.res = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': accessControlAllowOriginUrl
                        },
                        body: JSON.stringify( entry.items[0], null, 3)
                    }
                })
                .catch(console.error)
            }
        break;
    }
}
