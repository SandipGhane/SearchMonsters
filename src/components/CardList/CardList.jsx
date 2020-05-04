import React from 'react'
import Cards from '../Cards/Cards'
import style from './CardList.module.css'

export const CardList = (props) =>{
    return(
        <div className={style.list}>
            {props.monsters.map(monster=>(
               <Cards id={monster.id} monster={monster}/>
            ))}
        </div>
    );
}
