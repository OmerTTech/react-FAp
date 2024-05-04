import React, { useEffect, useState } from 'react'
import "./SelectOpt.css"
import axios, { all } from "axios"

const SelectOpt = ({setCategory}) => {
    const [item, setItem] = useState()


    const navigator = (e) => {
        const ctg = e.target.value
        setCategory(ctg)
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
        <select onChange={navigator} className="form-select" aria-label="Default select example">
            <option className='text-secondary' value="allCategory">Bütün məhsulları göstər</option>
            {
                item && item.map((element, index) => {
                    return (
                        <option key={index} value={element}>{element}</option>
                    )
                })
            }
        </select>

    )
}

export default SelectOpt