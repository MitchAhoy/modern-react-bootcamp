import React from 'react';
import {withRouter} from 'react-router-dom'
import './NavBar.css'

function NavBar(props) {

    const handleLogin = evt => {
        alert('logged you in')
        props.history.push('/food/salmon')
    }

    const handleBack = evt => {
        props.history.goBack()
    }

  return (
    <div className="NavBar">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default withRouter(NavBar);
