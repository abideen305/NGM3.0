import React from 'react'
import "./button.css"

const Button = ({title, size, pad}) => {
  return (
    <div>
      <button className="btn" style={{ fontSize:size, padding:pad}}>
        {title}
      </button>

    </div>
  )
}

export default Button
