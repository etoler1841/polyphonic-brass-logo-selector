import React from 'react'

const Card = ({ children, style }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        borderRadius: '1rem',
        boxShadow: '5px 5px 25px #999',
        padding: '2rem',
        border: '1px solid #999',
        maxWidth: `calc(100% - ${style.margin || 0})`,
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default Card
