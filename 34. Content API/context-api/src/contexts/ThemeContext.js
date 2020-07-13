import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {

  const [isDarkMode, toggleTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider >
  )
}


