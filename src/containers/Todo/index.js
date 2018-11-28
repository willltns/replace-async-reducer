import React from 'react'
import { connect } from 'react-redux'

class Todo extends React.Component {
  render() {
    console.log(this.props.todo)
    return <div>todo...</div>
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
})

export default connect(mapStateToProps)(Todo)
