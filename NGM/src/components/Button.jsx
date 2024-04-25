import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='w-auto bg-[#0DA04C] py-4 px-8 text-white font-medium rounded-3xl   '>
        {title}
      </button>
    </div>
  )
}

export default Button
