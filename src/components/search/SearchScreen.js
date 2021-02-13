

import React, { useMemo } from 'react';
// npm install query-string
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search); // obtenemos la query que es lo que buscamos para gestionar el filtro

    
    const [formValues, handleInputChange] = useForm({
        inputSearch: q
    });

    const { inputSearch } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${inputSearch}`)
        console.log(inputSearch);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="find your hero!" 
                            className="form-control"
                            name="inputSearch"
                            autoComplete="off"
                            value={inputSearch}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-clock btn-outline-success m-1">
                                Search...
                            </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results:</h4>
                    <hr />
                    {
                    (q==='')
                        &&
                        <div className="alert alert-warning">
                            Search a hero
                        </div>
                    }
                    {
                    (q!=='' && heroesFiltered.length===0)
                        &&
                        <div className="alert alert-danger">
                            No hero found 
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
