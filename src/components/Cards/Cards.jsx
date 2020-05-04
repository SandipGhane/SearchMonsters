import React from 'react'
import style from './Cards.module.css'

const Cards =(props)=>{
    return(
        <div className={style.card}>
            <img src={`https://robohash.org/${props.monster.id}`}
                style={{width:180,height:180}}
            alt="monster"
            />
        <h2>{props.monster.name}</h2>
        <p>
            {props.monster.email}
        </p>
        </div>
    );
}
export default Cards