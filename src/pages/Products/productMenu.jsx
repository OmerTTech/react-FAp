import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../../components/Cards/card'
import Spinner from '../../components/Spinner/spinner'
import SelectOpt from '../../components/SelectOpt/SelectOpt.jsx'




const ProductsMenu = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("allCategory")

    useEffect(() => {
        const productList = async () => {
            switch (category) {
                case "electronics":
                    await axios.get("https://fakestoreapi.com/products/category/electronics")
                        .then(items => setProducts(items.data))
                        .catch(error => console.log(error))
                    break;
                case "jewelery":
                    await axios.get("https://fakestoreapi.com/products/category/jewelery")
                        .then(items => setProducts(items.data))
                        .catch(error => console.log(error))
                    break;
                case "men's clothing":
                    await axios.get("https://fakestoreapi.com/products/category/men's clothing")
                        .then(items => setProducts(items.data))
                        .catch(error => console.log(error))
                    break;
                case "women's clothing":
                    await axios.get("https://fakestoreapi.com/products/category/women's clothing")
                        .then(items => setProducts(items.data))
                        .catch(error => console.log(error))
                    break;
                case "allCategory":
                    await axios.get("https://fakestoreapi.com/products")
                        .then(items => setProducts(items.data))
                        .catch(error => console.log(error))
                    break;
                default:
                    console.log("no found");
                    break;
            }
        };

        productList();
    }, [category]);

    return (
        <div className="container my-3">
            <div className="row d-flex g-3">
                <div className='d-flex justify-content-between'>
                    <SelectOpt setCategory={setCategory} />
                    <button className='btn btn-outline-success'>Filter</button>
                </div>
                {
                    products !== null && products !== undefined ? products.map(item => {
                        return (
                            <Card key={item.id} data={item} />
                        )
                    }) : <Spinner />
                }
            </div>
        </div>
    )
}

export default ProductsMenu;