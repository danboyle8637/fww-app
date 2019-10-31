import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useFireBase } from '../Firebase/FirebaseContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useFireBase()

  return (
    <Route
      {...rest}
      render={props => {
        return (
          <>
            {auth.isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: '/login', state: { from: props.location } }}
              />
            )}
          </>
        )
      }}
    />
  )
}

export default PrivateRoute
