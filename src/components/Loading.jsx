import React from 'react'
import LoadingAnimation from '../assets/loading.gif'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={LoadingAnimation} alt="loading" />
    </div>
  )
}

export default Loading
