import React, { useEffect, useState } from 'react'
import Products from '../../components/Products'
import Categories from '../../components/Categories';
const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data)
        }
        fetchProduct();
    })
    return (
        <>
            <Categories />
            {
                products.length > 0 ?
                    <Products products={products} /> :
                    "loading...."
            }
        </>
    )
}

export default ProductsPage