import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { ThemeContext } from './contexts/ThemeContext'

export const PageContent = (props) => {

  const { isDarkMode } = useContext(ThemeContext)

  const styles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    height: '100vh',
    width: '100vw'
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default PageContent