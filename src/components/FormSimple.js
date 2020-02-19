import React from 'react'

if (typeof window === 'undefined') {
  global.window = {}
}

const fetch = window.fetch

class SimpleForm extends React.Component {
  static defaultProps = {
    name: 'Simple Form'
  }

  initialState = {
    name: '',
    email: '',
    message: '',
    subject: `New Submission from ${this.props.siteTitle}!`,
    _gotcha: '',
    disabled: false,
    alert: '',
    action: '',
    'form-name': this.props.name
  }

  state = {
    ...this.initialState
  }

  form = null
  inputs = []

  componentDidMount () {
    if (!this.form) return
    this.inputs = [...this.form.querySelectorAll('input, textarea')]
    this.addListeners()
  }

  addListeners = () => {
    this.inputs.forEach(input => {
      input.addEventListener('invalid', () => {
        input.dataset.touched = true
      })
      input.addEventListener('blur', () => {
        if (input.value !== '') input.dataset.touched = true
      })
    })
  }

  resetForm = customState => {
    this.setState({ ...this.initialState, ...customState })
    this.inputs.forEach(input => {
      delete input.dataset.touched
    })
  }

  handleChange = e =>
  this.setState({
    [e.target.name]: e.target.value
  })

  handleSubmit = e => {
    const data = JSON.stringify({"name": this.state.name,"email": this.state.email})
    console.log(data)
    fetch("../../.netlify/functions/mailerlite_subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
    .then(response => {
      console.log(response)
      this.resetForm({
        alert: 'Thanks for your enquiry, we will get back to you soon.'
      })
    })
    .catch(error => alert(error))

    e.preventDefault();
  }

  render() {

    return (
      <form
        className=""
        name={this.state['form-name']}
        ref={form => {
          this.form = form
        }}
        action={this.state.action}
        onSubmit={this.handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-2">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Förnamn"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enquire" />
        </div>
      </form>
    )
  }
}

export default SimpleForm
