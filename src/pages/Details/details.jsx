import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/spinner'

const Details = () => {
  const { id } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    const getProductById = async () => {
      await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setItem(response.data))
        .catch(error => console.log(error))
    }

    getProductById()
    console.log(item);
  },[])
  return (

    <div>
      {
        item ? <div className="container my-5">
          <div className="row">
            <div className="col-lg-4">
              <img className='img-fluid' src={item.image} alt="" />
            </div>
            <div className="col-lg-7 m-3">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button className='btn btn-outline-success'>Add to card</button>
            </div>
          </div>
        </div> : <Spinner />
      }
    </div>
  )
}

export default Details