import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading'
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    // const [myProducts, setMyProducts] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyProducts(data)
    //         })
    // }, [user?.email])
    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/myproducts/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product Advertise successfully')
                refetch()
            })
    }

    return (
        <div>
            <h3 className='text-3xl text-blue-600 font-semibold text-center'>My Products</h3>
            <div className="overflow-x-auto my-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Buying Price</th>
                            <th>Resell Price</th>
                            <th>Delete</th>
                            <th>Advertised</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.status}</td>
                                <td>{product.originalPrice} Taka</td>
                                <td>{product.resellPrice} Taka</td>
                                <td><button className="btn btn-xs border-none rounded bg-red-600">Delete</button></td>
                                <td>
                                    {product?.advertise ? <p>Asvertised</p> : <button onClick={() => handleAdvertise(product._id)} className="btn btn-xs border-none rounded bg-blue-600">Advertise</button>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;