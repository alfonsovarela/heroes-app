import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    // extraccion de parametro a la url para obtener los datos detalle
    // HOOK: useParams
    const params = useParams();
    const hero = useMemo(() => getHeroById(params.heroId), [params.heroId]); // useMemo carga el componente cuando se cargue el id unicamente
    // const hero = getHeroById(params.heroId)

    if (!hero){
        return <Redirect to="/" />
    }
    // sacamos todas las propiedades del objeto hero
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;


    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/');
        }
        history.goBack();
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${params.heroId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInUp"
                    alt={superhero} />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> {first_appearance}
                    </li>
                </ul>
                <h5>Characters:</h5>
                <p> {characters} </p>

                <button className="btn btn-outline-info"
                        onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
