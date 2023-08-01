import React, { useEffect, useState } from 'react';
import Features from './Features';
import Title from './Title';
import Spinner from './Spinner';

const Categories = () => {
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        const fetchCategory = async () => {
            const res = await fetch('https://fakestoreapi.com/products/categories');
            const data = await res.json();
            setCategory(data);
            console.log(data);
        }
        fetchCategory();
    });

    if (Category.length === 0) {
        <Title title="features" />
        return <Spinner/>
    } else {
        return (
            <>
                <Title title="features" />
                <Features cards={Category} />
            </>
        )
    }
}

export default Categories