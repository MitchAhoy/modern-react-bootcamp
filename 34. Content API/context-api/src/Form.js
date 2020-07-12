import React, { useContext } from 'react'
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { LanguageContext } from './contexts/LanguageContext'
import styles from './styles/FormStyles'

const translations = {
  english: {
    signIn: 'Sign In',
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me'
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Electronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi'
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contrasena',
    remember: 'Recuerdame'
  }
}

const Form = props => {
  const { language, changeLanguage } = useContext(LanguageContext)
  const { classes } = props

  const { email, signIn, password, remember } = translations[language]



  return (
    <main className={classes.main} >
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus />
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary' />} label={remember}></FormControlLabel>
          <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>{signIn}</Button>
        </form>
      </Paper>
    </main>
  )
}


export default withStyles(styles)(Form)