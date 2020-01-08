import React, { Component, Fragment } from 'react'
import { X } from 'react-feather'

import './Popup.css'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = { showPopup: false }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    const { children } = this.props
    return (
      <Fragment>
        <div className="taCenter">
          <h3> Simple Popup Example</h3>
          <div>
            <button
              className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase"
              onClick={this.togglePopup.bind(this)}
            >
              {this.props.btnText}
            </button>
          </div>
        </div>

        {this.state.showPopup ? (
          <div className="Popup-Overlay">
            <div
              className="Popup-Background"
              onClick={this.togglePopup.bind(this)}
            />
            <div className="sm:max-w-xs z-40 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <X
                className="Popup-Close"
                onClick={this.togglePopup.bind(this)}
              />
              {children}
            </div>
          </div>
        ) : null}
      </Fragment>
    )
  }
}

export default Popup
