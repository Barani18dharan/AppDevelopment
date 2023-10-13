import React from 'react'
const handle =()=>{
    window.history.back();
}
const Unauthorized = () => {
  return (
    <div>Unauthorized
        <button onClick={handle}>back</button>
    </div>
  )
}

export default Unauthorized