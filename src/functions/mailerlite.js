const fetch = require('node-fetch')
require('dotenv').config()
const { EMAIL_TOKEN } = process.env
exports.handler = async (event, context) => {
  const endpoint = event.queryStringParameters.endpoint
  let payload = {
    method: event.httpMethod,
    headers: {
      'X-MailerLite-ApiKey': `${EMAIL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  }
  if (event.httpMethod === 'POST') {
    payload['body'] = event.body
  }
  console.log(payload)

  try {
    let response = await fetch(
      `https://api.mailerlite.com/api/v2/${endpoint}`,
      payload
    )
    let data = await response.json()
    return { statusCode: 200, body: JSON.stringify(data) }
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message })
    }
    return error
  }
}
