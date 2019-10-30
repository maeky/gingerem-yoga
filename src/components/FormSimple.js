import React from "react"

import "./Form.css"

export default ({
  name = "Simple Form",
  subject = "", // optional subject of the notification email
  action = ""
}) => (
  <form
    className="Form"
    name={name}
    action={action}
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value={name} />
    <label className="Form--Label Form--InputText">
      <input
        className="Form--Input"
        type="text"
        placeholder="Name"
        name="name"
        required
      />
    </label>
    <label className="Form--Label">
      <input
        className="Form--Input"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
    </label>
    <label className="Form--Label">
      <textarea
        className="Form--Input Form--Textarea"
        placeholder="Message"
        name="message"
        rows="10"
        required
      />
    </label>
    {/* <input type="text" name="_gotcha" style={{ display: "none" }} /> */}
    {!!subject && <input type="hidden" name="subject" value={subject} />}
    <input
      className="Button Form--SubmitButton"
      type="submit"
      value="Enquire"
    />
  </form>
)
