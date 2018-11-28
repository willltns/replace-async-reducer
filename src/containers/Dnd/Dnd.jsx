import './dnd.scss'

import React from 'react'

import Board from './Board/Board'

class Dnd extends React.Component {
  state = {
    kX: 2,
    kY: 2,
  }

  moveKnight = (kX, kY) => {
    this.setState({ kX, kY })
  }

  render() {
    const { kX, kY } = this.state

    return (
      <div style={{ width: '80vw', height: '80vh' }}>
        <Board knightPos={[kX, kY]} move={this.moveKnight} />
      </div>
    )
  }
}

export default Dnd
