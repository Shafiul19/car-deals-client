import React, { useEffect, useState } from 'react';
import Advertize from './Advertize';
import Banner from './Banner';


const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catgories')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div>
            <Banner></Banner>
            <Advertize></Advertize>
            {categories.length}
        </div>
    );
};

export default Home;