import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {
    const { data: reportedProducts, isLoading, refetch } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedproduct');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className=' text-3xl text-center text-red-600'>Reported Items</h3>
            {
                reportedProducts?.length
                    ?
                    <div className="overflow-x-auto my-10">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Seller Name</th>
                                    <th>Resale Price</th>
                                    <th>Make Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reportedProducts?.map((reportedProduct, i) => <tr key={reportedProduct._id}>
                                        <th>{i + 1}</th>
                                        <td>{reportedProduct.productName}</td>
                                        <td>{reportedProduct.sellerName}</td>
                                        <td>{reportedProduct?.resellPrice} Taka</td>
                                        <td><button className='btn bg-red-600 border-none btn-sm rounded'>Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    : <></>
            }
        </div>
    );
};

export default ReportedItems;