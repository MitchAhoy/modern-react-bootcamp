import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { ThemeContext } from './contexts/ThemeContext'
import { LanguageContext } from './contexts/LanguageContext'

import styles from './styles/NavBarStyles'

const NavBar = props => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)
    const { classes } = props


    return (
        <div className={classes.root}>
            <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit'>
                        <span>{language.toUpperCase()}</span>
                    </IconButton>
                    <Switch onChange={() => toggleTheme(!isDarkMode)} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />

                        </div>
                        <InputBase placeholder='Search...' classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}






export default withStyles(styles)(NavBar)