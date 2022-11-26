import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
                <h3 className='my-10 text-3xl text-blue-600 uppercase font-bold text-center '>Car Categories</h3>
                <div className='grid lg:grid-cols-3 gap-5'>
                    {categories?.map(category => <div key={category._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title uppercase">{category.name}</h2>
                            <p className='text-xl'>See all products from  {category.name} category</p>
                            <div className="card-actions ">
                                <Link className='w-full btn btn-info' to={`/category/${category._id}`}>
                                    Explore More Products
                                </Link>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;