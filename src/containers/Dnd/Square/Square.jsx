import './square.scss'

import React from 'react'

const Square = ({ black, children }) => {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        color: stroke,
        background: fill,
      }}
    >
      {children}
    </div>
  )
}

export default Square
