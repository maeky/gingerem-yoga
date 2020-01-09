import React, { Component, Fragment } from 'react'
import RespModal from 'react-responsive-modal'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { children } = this.props
    const { open } = this.state
    return (
      <div>
        <button
          className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase"
          onClick={this.onOpenModal}
        >
          {this.props.btnText}
        </button>
        <RespModal
          open={open}
          onClose={this.onCloseModal}
          center
          children={children}
        />
      </div>
    )
  }
}

export default Modal
