import React from 'react'

export default ({
  name = 'Simple Form',
  subject = '', // optional subject of the notification email
  action = ''
}) => (
    <form
      className=""
      name={name}
      action={action}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={name} />
      <div className="mb-4">
        <label className="block text-gray-700 text-2xl font-bold mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Förnamn"
            name="name"
            required
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-2xl font-bold mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </label>
        {/* <input type="text" name="_gotcha" style={{ display: "none" }} /> */}
        {!!subject && <input type="hidden" name="subject" value={subject} />}
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enquire" />
      </div>
    </form>
)
