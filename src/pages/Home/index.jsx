import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Features from '../../components/Features'
import Title from '../../components/Title'
import State from '../../components/State'
import Categories from '../../components/Categories'
import Spinner from '../../components/Spinner'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products?limit=12');
            const data = await res.json();
            setProducts(data)
        }
        fetchProduct();
    })
    return (
        <>
            <Hero />
            <Categories />
            <Title title="products" />
            {
                products?.length > 0 ? <Products products={products} /> : <Spinner/>
            }
            <State />
        </>
    )
}

export default Home