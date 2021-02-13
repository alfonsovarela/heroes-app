import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // el resto de los elementos se guardaran en esta variable
}) => {
    localStorage.setItem('lastPath', rest.location.pathname); // guardamos en el localstorage la ultima pagina visitada. En caso de log out, al hacer log in se mantiene la ultima pagina visitada
    return (
        <Route {...rest} 
            component={ (props) => (
                (isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
