import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const portalContainer = document.getElementById('portal')
const element = document.createElement('div')

const Portal = ({ children, node }) => {
  useEffect(() => {
    portalContainer.appendChild(element)

    return () => {
      portalContainer.removeChild(element)
    }
  }, [node])

  return createPortal(children, element)
}

export default Portal
