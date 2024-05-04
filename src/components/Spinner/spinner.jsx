import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";


const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center my-4'>
        <SyncLoader color="#dc3545" />
    </div>
  )
}

export default Spinner