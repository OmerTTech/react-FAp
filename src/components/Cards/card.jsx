import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'

const card = (props) => {
  const { id, title, category, image, price } = props.data
  return (
    <div className='col-lg-3 col-6'>
      <div className="card">
        <Link to={`/${id}`}><img src={image} className="card-img-top" alt="..." /></Link>
        <div className="card-body">
          <h5 className="card-title">{title.length > 25 ? title.slice(0,25) + "..." : title}</h5>
          <div className='d-flex justify-content-between'>
          <span href="#" className="text-dark fw-bold my-1">{price + " ₼"}</span>
          <span href="#" className="btn btn-success py-1 px-3">{category}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card