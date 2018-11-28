import './knight.scss'

import React from 'react'
import { DragSource } from 'react-dnd'

import { itemTypes } from '../dndConsts'

const knightSource = {
  beginDrag: props => {
    return {}
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

const Knight = ({ connectDragSource, isDragging }) => {
  return connectDragSource(
    <span
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </span>
  )
}

export default DragSource(itemTypes.KNIGHT, knightSource, collect)(Knight)
