import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); // El hook useMemo hace que se carguen los heroes EXCLUSIVAMENTE si el publisher cambia
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero} />       
                ))
            }    
        </div>
    )
}
