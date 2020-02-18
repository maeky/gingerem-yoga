import fetch from 'node-fetch'
require('dotenv').config()
const { EMAIL_TOKEN } = process.env
exports.handler = async (event, context) => {
  console.log(event.body)
  try {
    let response = await fetch("https://api.mailerlite.com/api/v2/subscribers", 
    {
      method: "POST",
      headers: {
        "X-MailerLite-ApiKey": `${EMAIL_TOKEN}`, 
        "Content-Type": "application/json"
      },
      body: event.body
    })
    let data = await response.json()

    return({statusCode: 200, body: JSON.stringify(data)})
  } catch(err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message})
    }
    return(error)
 }
}