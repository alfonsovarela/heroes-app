import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext); // Obtenemos el dispatch del contwexto de autenticacion, que es lo que nos interesa para loggearnos

    const handleLogin = () => {
        // history.push('/');
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'Alfonso'
            }
        })

        history.replace(lastPath); // reemplaza en la historia que no visitó el login, sino que va directamente a la ultima pagina visitada
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary btn-lg"
                onClick= { handleLogin }>
                Login
            </button>
        </div>
    )
}
