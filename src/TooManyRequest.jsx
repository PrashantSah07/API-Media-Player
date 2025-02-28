import React from 'react'
import { Link } from 'react-router-dom'

const tooManyRequest = () => {
    return (
        <>
            <div className="tooManyRequest-Container">
                <h1>Too Many Requests</h1>
                <h1>429</h1>
                <p>Sorry, you've made too many requests in a short period. Please try again later.</p>
                <Link to="/" className="home-link">Go Back Home</Link>
            </div>
        </>
    )
}

export default tooManyRequest
