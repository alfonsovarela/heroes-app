import React from 'react';
import { shallow, mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {
    

    const history = {
        length: 10, // 10 registros en history
        push: jest.fn(),
        goBack: jest.fn()
    }

    test('debe de mostrarse el componente redirect si no hay argumentos en el url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history}/>
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Route path="/hero/:heroId" component={HeroScreen}/>
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('debe de regresar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1, // if (history.length <= 2) { push }
            push: jest.fn(),
            goBack: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Route path="/hero/:heroId" 
                       component={() => 
                        <HeroScreen history={history} />
                    }
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Route path="/hero/:heroId" 
                       component={() => 
                        <HeroScreen history={history} />
                    }
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.goBack).toHaveBeenCalled();
    });

    test('debe de llamar a Redirect si el hero no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Route path="/hero/:heroId" 
                       component={() => 
                        <HeroScreen history={history} />
                    }
                />
            </MemoryRouter>
        );
        expect(wrapper.text()).toBe('');
    });
    
})
