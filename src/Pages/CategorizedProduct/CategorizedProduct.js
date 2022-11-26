import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { MdVerifiedUser } from "react-icons/md";
import BookingModal from './BookingModal';
import { set } from 'react-hook-form';

const CategorizedProduct = () => {

    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    console.log(booking);

    console.log(id);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category/${id}`)
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div>
            <h3 className='text-3xl text-blue-600 font-semibold text-center my-10'>All Products in this categoy</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <div key={product._id} className="card v-96  bg-base-100 shadow-xl">
                        <figure className='w-full h-5/6 bg-slate-100'><img src={product.image} alt={product.productName} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.productName}</h2>
                            <h2 className='text-lg font-semibold flex items-center'>Seller Name: {product.sellerName} {product?.var && <MdVerifiedUser className='text-blue-700'></MdVerifiedUser>}</h2>
                            <p>Location: {product.location}</p>
                            <p>Original Price: {product.originalPrice} Taka</p>
                            <p className='text-red-600'>Resale Price: {product.resellPrice} Taka</p>
                            <p> Uses: {product.yearsOfUse} Years</p>
                            <p>Date of posting: {product.postingTime.slice(0, 10)}</p>
                            <p>Condition: {product.productCondition}</p>
                            <label htmlFor="booking-modal" onClick={() => setBooking(product)} className='btn btn-info'>Book Now</label>
                        </div>
                    </div>)
                }
            </div>
            {
                booking && <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                    refetch={refetch}
                ></BookingModal>
            }
            <div className='flex justify-center'>
                <Link to='/' className='btn btn-info my-10  text-center'>Back to home</Link>
            </div>
        </div>
    );
};

export default CategorizedProduct;