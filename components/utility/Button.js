import React from 'react'

function Button({children,className,onClick}) {
  return (
    <button 
    className={`p-2 rounded-md ring-2 hover:bg-gray-300 ${className}`}
    onClick={onClick}
    >{children}</button>
  )
}

export default Button