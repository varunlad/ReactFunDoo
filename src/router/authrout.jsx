import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthorRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}
            render={props => {
                if (!localStorage.getItem("userid")) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/Dashboard" />
                }
            }}

        />
    )
}

export default AuthorRoute