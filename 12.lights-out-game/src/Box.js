import React from 'react'
import './Box.css'


const Box = (props) => {

        return <div className={`Box ${props.isLit ? 'Box-light' : 'Box-dark'}`}></div>
    

}

export default Box