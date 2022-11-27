import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { MdVerifiedUser } from "react-icons/md";
import BookingModal from './BookingModal';
import toast from 'react-hot-toast';

const CategorizedProduct = () => {

    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    console.log(booking);

    console.log(id);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category/${id}`)
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleReport = (product) => {
        console.log(product);
        fetch(`http://localhost:5000/reportedproduct/${product._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`${product.productName} reported`)
                refetch();
            })
    }

    return (

        <div>
            <h3 className='text-3xl text-blue-600 font-semibold text-center my-10'>All Products in this categoy</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <div key={product._id} className="card v-96  bg-base-100 shadow-xl">
                        <figure className='w-full h-5/6 bg-slate-100'><img src={product.image} alt={product.productName} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{product.productName}</h2>
                            <h2 className='text-xl font-semibold flex items-center'>Seller Name: {product.sellerName} {product?.verified && <MdVerifiedUser className='text-blue-700'></MdVerifiedUser>}</h2>
                            <p className='text-lg font-semibold'>Location: {product.location}</p>
                            <p className='text-lg font-semibold'>Original Price: {product.originalPrice} Taka</p>
                            <p className='text-red-600 text-lg font-semibold'>Resale Price: {product.resellPrice} Taka</p>
                            <p className='text-lg font-semibold'> Uses: {product.yearsOfUse} Years</p>
                            <p className='text-lg font-semibold'>Date of posting: {product.postingTime.slice(0, 10)}</p>
                            <p className='text-lg font-semibold'>Condition: {product.productCondition}</p>
                            <label htmlFor="booking-modal" onClick={() => setBooking(product)} className='btn btn-info'>Book Now</label>
                            {
                                product?.reported ?

                                    <p className='text-center text-red-600 text-2xl font-bold'>
                                        Reported
                                    </p>
                                    :
                                    <button onClick={() => handleReport(product)} className='btn bg-red-600 border-none'>Report to admin</button>
                            }
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