import React from 'react'
import styles from './BoxItem.module.css'

const BoxItem = (props) => {
    return (
        <>
            <div className={styles.BoxItem}>
                <img src={props.src} alt={props.img_alt_desc} />
                <div>
                    <p>{props.alt_description}</p>
                    <p>{props.description}</p>
                    <p>{props.likes}</p>
                    <p>{props.created_at}</p>
                    <p>{props.optional1}</p>
                    <p>{props.optional2}</p>
                    <p>{props.optional3}</p>
                    <p>{props.optional4}</p>
                    <p>{props.optional5}</p>
                    <a target='_blank' href={props.download}><button>{props.buttonName}</button></a>
                </div>
            </div>
        </>
    )
}

export default BoxItem
