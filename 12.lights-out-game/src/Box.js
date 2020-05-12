import React from 'react'
import './Box.css'


const Box = (props) => {
        return <div onClick={props.onClick} className={`Box ${props.isLit ? 'Box-light' : 'Box-dark'}`}></div>
}

export default Box