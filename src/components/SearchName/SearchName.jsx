import React from 'react'
import style from './SearchName.module.css'

const SeachName = (prosp) =>
        (
            <input type="text"
                placeholder="Search Monsteres"
                onChange = {prosp.onSearchName}
                className={style.searchBox}
                
            />

    );

export default SeachName