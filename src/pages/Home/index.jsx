import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Features from '../../components/Features'
import Title from '../../components/Title'
import State from '../../components/State'
import Loading from '../../components/Loading'
import Categories from '../../components/Categories'

const Home = () => {
    const [products , setProducts ] = useState([]);
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products?limit=12');
            const data = await res.json();
            setProducts(data)
        }
        fetchProduct();
    })
  return (
    <>
        <Hero/>
        <Categories/>
        {
            products?.length>0 ? <Products products={products}/>:<Loading/>
        }
        <State/>
    </>
  )
}

export default Home