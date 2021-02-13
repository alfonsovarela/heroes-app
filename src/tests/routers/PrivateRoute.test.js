import React from 'react';

import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';

describe('Pruebas en <PrivateRoute />', () => {
    
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si hay un usuario autenticado y guardar en localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Componente de prueba</span> }
                    {...props}
                />
            </MemoryRouter>
        );
        
        expects(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('debe de bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Componente de prueba</span> }
                    {...props}
                />
            </MemoryRouter>
        );
        
        expects(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
    
    
})
