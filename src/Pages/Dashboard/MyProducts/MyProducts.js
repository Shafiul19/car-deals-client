import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [user?.email])


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
                                <td><button className="btn btn-xs border-none rounded bg-blue-600">Advertise</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;