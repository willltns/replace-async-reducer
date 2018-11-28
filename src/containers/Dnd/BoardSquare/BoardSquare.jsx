import React from 'react'
import { DropTarget } from 'react-dnd'

import Square from '../Square/Square'

import { itemTypes } from '../dndConsts'

export function canMoveKnight(toX, toY, kX, kY) {
  const dx = toX - kX
  const dy = toY - kY

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

const squareTarget = {
  drop(props, monitor) {
    props.move(props.x, props.y)
  },

  canDrop(props) {
    return canMoveKnight(props.x, props.y, props.kX, props.kY)
  },
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
})

function renderOverlay(color) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    />
  )
}

const BoardSquare = ({ x, y, connectDropTarget, isOver, canDrop, children }) => {
  const black = (x + y) % 2 === 1
  return connectDropTarget(
    <div style={{ height: '100%', width: '100%' }}>
      <Square black={black}>{children}</Square>
      {isOver && canDrop && renderOverlay('yellow')}
      {!isOver && canDrop && renderOverlay('orange')}
      {isOver && !canDrop && renderOverlay('red')}
    </div>
  )
}

export default DropTarget(itemTypes.KNIGHT, squareTarget, collect)(BoardSquare)
