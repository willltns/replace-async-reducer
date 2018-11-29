yarn install

yarn add node-sass

yarn start

```
file: src/components/RouteWithSubRoutes/index.js

    <Route
       ...
       render={props => {

         // inject and replace async reducer
         injectReducer()

         return <renderConfig.component {...props} routes={route.routes} />
       }}
     />

```
