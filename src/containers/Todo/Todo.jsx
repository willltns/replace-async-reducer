import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes'

class Todo extends React.Component {
  render() {
    return (
      <div>
        todo...
        <button
          onClick={() => this.props.dispatch({ type: 'APP/TODO', payload: 'async c' })}
        >
          changeTodoState
        </button>
        <Link to="/todo/aa">todo-aa</Link>
        {this.props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
})

export default connect(mapStateToProps)(Todo)
