import React from 'react'
import styles from './SearchBox.module.css'

const SearchBox = (props) => {

    return (
        <>
            <div className={styles.searchBox}>
                <h1>{props.heading}</h1>
                <input type="text" name="" id="" placeholder={props.placeholder} onChange={props.onChange} />
            </div>
        </>
    )
}

export default SearchBox
