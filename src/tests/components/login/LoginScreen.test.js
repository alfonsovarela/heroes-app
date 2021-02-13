import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {
   
    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>
    );
    
    test('debe de mostrarse correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegacion', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Alfonso'
            }
        });

        expect(history.replace).toHaveBeenCalled();
    });
    
    




});
