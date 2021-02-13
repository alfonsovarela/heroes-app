import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    return (
        <div className ="card-columns">
            <h1>DC Heroes</h1>
            <hr />
            <HeroesList publisher={"DC Comics"} />
        </div>
    )
}
