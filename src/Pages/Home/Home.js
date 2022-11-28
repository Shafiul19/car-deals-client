import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Advertize from './Advertize';
import Banner from './Banner';
import axios from 'axios';
import Footer from './Footer';
import Stats from './Stats';


const Home = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const res = await axios.get('https://car-deals-server.vercel.app/catgories');
            setCategories(res.data)
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        fetchCategories();
    }, [])

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
                                    Explore All Products
                                </Link>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <Stats></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Home;