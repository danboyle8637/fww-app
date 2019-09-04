import React, { createContext, useEffect, useState, useContext } from 'react'

import { getRems } from '../utils/helpers'
import { sizes } from '../styles/Theme'

const ScreenWidthContext = createContext()

const ScreenWidthStore = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState('')

  useEffect(() => {
    const width = getRems(window.innerWidth)
    const { mobile, tablet, ipadPro, laptop, ultraWide } = sizes

    if (width < mobile) {
      setScreenWidth('mobile')
    }

    if (width > mobile && width < ipadPro) {
      setScreenWidth('tablet')
    }

    if (width > tablet && width < laptop) {
      setScreenWidth('ipadPro')
    }

    if (width > ipadPro && width < ultraWide) {
      setScreenWidth('laptop')
    }

    if (width > ultraWide) {
      setScreenWidth('ultraWide')
    }
  }, [])

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  )
}

const useScreenWidthContext = () => useContext(ScreenWidthContext)

export {
  ScreenWidthContext as default,
  ScreenWidthStore,
  useScreenWidthContext
}
