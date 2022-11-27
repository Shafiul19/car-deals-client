import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';

const Advertize = () => {
    const { data: advertisedProduct = [], isLoading } = useQuery({
        queryKey: ['advertisedproduct'],
        queryFn: async () => {
            const res = await fetch('https://car-deals-server.vercel.app/advertisedproduct');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {advertisedProduct?.length ?
                <div>
                    <h3 className='my-10 text-3xl text-blue-600 uppercase font-bold text-center '>Advertizement</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>

                        {/* <div className="relative w-full flex gap-4 py-6 overflow-x-auto"> */}
                        {
                            advertisedProduct?.map(p => <div key={p._id} className="card v-96  bg-base-100 shadow-xl">
                                <figure className='w-full h-5/6'><img src={p.image} alt={p.productName} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{p.productName}</h2>
                                    <h2 className='text-lg font-semibold'>Seller Name: {p.sellerName}</h2>
                                    <p>Original Price: {p.originalPrice} Taka</p>
                                    <p className='text-red-600'>Resale Price: {p.resellPrice} Taka</p>
                                    <p>Condition: {p.productCondition}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                : <></>
            }
        </div>
    );
};

export default Advertize;