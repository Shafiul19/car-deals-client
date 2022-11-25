import React, { useEffect, useState } from 'react';


const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catgories')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div>
            {categories.length}
        </div>
    );
};

export default Home;