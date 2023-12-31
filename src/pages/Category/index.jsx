import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Products';
import Spinner from '../../components/Spinner';

const Category = () => {
    const { name } = useParams();
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
            const data = await res.json();
            setProduct(data)
        }
        fetchProduct();
    })
    return (
        <>
        {products.length>0?<Products products={products}/>:<Spinner/>}
        </>
    )
}

export default Category