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
          <div>
            <button
              className={this.props.btnClass}
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
            {/* <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-12 pt-20 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative"> */}
            <div className="bg-white rounded-lg sm:max-w-3xl sm:mx-auto p-12 pt-20 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 sm:relative">
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
