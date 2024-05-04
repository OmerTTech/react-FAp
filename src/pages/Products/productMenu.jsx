import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../../components/Cards/card'
import Spinner from '../../components/Spinner/spinner'




const ProductsMenu = () => {
    const [products, setProducts] = useState()

useEffect(() => {
    const productList = async () => {
        await axios.get("https://fakestoreapi.com/products")
            .then(items => setProducts(items.data))
            .catch(error => console.log(error))
    }
    productList()
    
}, [])

return (
        <div className="container my-3">
            <div className="row d-flex g-3">
                {
                products !== null && products !== undefined ? products.map(item => {
                    return(
                    <Card key={item.id} data={item}/>
                    )
                }) : <Spinner /> 
                } 
            </div>
        </div>
    )
}

export default ProductsMenu;