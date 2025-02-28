import React from 'react'
import styles from './NextPreviousButtonPage.module.css'

const NextPreviousButtonPage = (props) => {
    return (
        <>
            <div className={styles.buttons}>
                <button onClick={props.previousPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path>
                    </svg> Previous
                </button>
                <button onClick={props.nextPage}>Next
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default NextPreviousButtonPage
