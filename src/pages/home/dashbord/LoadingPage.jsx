import React from 'react'
import {ColorRing} from 'react-loader-spinner'

function LoadingPage() {
  return (
    <div className='Loading-Page'>
      <ColorRing
  visible={true}
  height="50"
  width="50"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['white', 'white', 'white', 'white', 'white']}
  />
    </div>
  )
}

export default LoadingPage
