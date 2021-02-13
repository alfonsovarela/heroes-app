import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    // Le pasamos todos los atributos de heroes.js para usar spread(...) en HeroesList.js
    id,
    superhero ,
    publisher, 
    alter_ego,
    first_appearance,
    characters 
}) => {
    return (
        <div className="card text-white bg-dark ms-3 mt-2" style={{maxWidth: 580}}>
            <div className="card-header">
                <h3>{superhero}</h3>
                <small>{alter_ego}</small>
            </div>
            
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="card-title">
                                <p>First appearance: {first_appearance}</p>
                            </div>
                            {
                                ( alter_ego !== characters)
                                    && <p className="card-text">Also: {characters}</p>    
                            }
                            <p>Published by {publisher}</p>
                        </div>
                    </div>


                    <Link to={`./hero/${id}`}>More...</Link>
                    
                    
                </div>
            
        </div>
    )
}
