import React, { useEffect, useState } from 'react'
import "./SelectOpt.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SelectOpt = () => {
    const [item, setItem] = useState()
    const navigate = useNavigate();

    const navigator = (e) => {
        const selectedIndex = e.target.value
        selectedIndex ? navigate(`/products/category/${selectedIndex}`) : navigate(`/products`)
    }

    useEffect(() => {
        const getProductById = async () => {
            await axios.get(`https://fakestoreapi.com/products/categories`)
                .then(response => setItem(response.data))
                .catch(error => console.log(error))
        }

        getProductById()
    }, [])
    return (
        <div>
            <select onChange={navigator} className="form-select" aria-label="Default select example">
                <option className='text-secondary' value="">Bütün məhsulları göstər</option>
                {
                    item && item.map((element, index) => {
                        return (
                            <option key={index} value={index}>{element}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SelectOpt