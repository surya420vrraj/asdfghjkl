import React from 'react'

const Popup = ({close}) => {
    console.log("his")
  return (
    <div className='pop'>
        <div className='container'>
            <h1>Hello</h1>
            <p>Accept the Rules</p>
            <button onClick={close}>close</button>
        </div>
      
    </div>
  )
}

export default Popup
