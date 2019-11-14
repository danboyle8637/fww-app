import { Component } from 'react'
import { createPortal } from 'react-dom'

const portalContainer = document.getElementById('portal')

class Portal extends Component {
  constructor(props) {
    super(props)

    this.el = document.createElement('div')
  }

  componentDidMount() {
    portalContainer.appendChild(this.el)
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

export default Portal
