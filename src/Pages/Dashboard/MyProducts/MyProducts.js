import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
// import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading'
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deleteProduct, setDeleteProduct] = useState(null);

    const closeModal = () => {
        setDeleteProduct(null)
    }


    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://car-deals-server.vercel.app/myproducts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdvertise = id => {
        fetch(`https://car-deals-server.vercel.app/myproducts/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product Advertise successfully')
                refetch()
            })
    }

    const handleDeleteProduct = (product) => {
        fetch(`https://car-deals-server.vercel.app/myproducts/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${product.productName} deleted successfully`)
                }
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
                                <td><label htmlFor="confirmation-modal" onClick={() => setDeleteProduct(product)} className="btn btn-xs border-none rounded bg-red-600">Delete</label></td>
                                <td>
                                    {product?.advertise ? <p>Asvertised</p> : <button onClick={() => handleAdvertise(product._id)} className="btn btn-xs border-none rounded bg-blue-600">Advertise</button>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteProduct && <ConfirmationModal
                title={'Are you sure want to delete'}
                message={`If you delete ${deleteProduct.productName}. It can't be undone`}
                successAction={handleDeleteProduct}
                modalData={deleteProduct}
                successButtonName="Delete"
                closeModal={closeModal}
            ></ConfirmationModal>}
        </div>
    );
};

export default MyProducts;