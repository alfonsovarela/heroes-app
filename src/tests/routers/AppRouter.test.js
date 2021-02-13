import React, { useContext } from 'react';
import {mount, shallow} from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de mostrar el Login si no está autenticado ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el componente de marvel (cargado por defecto si esta autenticado)', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Juan'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('navbar').exists()).toBe(true); // si existe el navbar, el componente existe
    });
    
    
    

})
