import './app.scss'
import logo from '../../common/img/logo.svg'

import React from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { withRouter, Link } from 'react-router-dom'

import { routes } from '../../index'

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes'

import { todoAction } from './actions'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends React.Component {
  _dispatch = () => {
    this.props.dispatch(todoAction())
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this._dispatch} src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <nav className="nav">
            <Link to="/todo">todo</Link>
            <Link to="/another">another</Link>
            <Link to="/dnd">dnd</Link>
          </nav>
        </header>

        <main className="App-main">
          <DragDropContextProvider backend={HTML5Backend}>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </DragDropContextProvider>
        </main>
      </div>
    )
  }
}

const HotExportedApp = hot(module)(App)
const connectedApp = connect()(HotExportedApp)
export default withRouter(connectedApp)
