import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithSubRoutes = route => {
  const { renderConfig } = route

  return (
    <Route
      path={route.path}
      exact={!!route.exact}
      render={props => {
        renderConfig.injectReducer && renderConfig.injectReducer()
        return <renderConfig.component {...props} routes={route.routes} />
      }}
    />
  )
}

export default RouteWithSubRoutes
