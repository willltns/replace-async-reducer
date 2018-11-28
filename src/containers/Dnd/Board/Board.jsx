import './board.scss'

import React from 'react'

import BoardSquare from '../BoardSquare/BoardSquare'
import Knight from '../Knight/Knight'

const _renderSquare = (i, [kX, kY], move) => {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === kX && y === kY

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%', position: 'relative' }}>
      <BoardSquare x={x} y={y} move={move} kX={kX} kY={kY}>
        {isKnightHere ? <Knight /> : null}
      </BoardSquare>
    </div>
  )
}

const Board = ({ knightPos, move }) => {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(_renderSquare(i, knightPos, move))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}

export default Board
