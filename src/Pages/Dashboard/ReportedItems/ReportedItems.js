import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal';
import Loading from '../../Shared/Loading';

const ReportedItems = () => {
    const [deletingItem, setDeletingItem] = useState(null)
    console.log(deletingItem);

    const closeModal = () => {
        setDeletingItem(null);
    }

    const { data: reportedProducts, isLoading, refetch } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedproduct');
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (reportedProduct) => {
        fetch(`http://localhost:5000/reportedproduct/${reportedProduct._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${reportedProduct.productName} Deleted Successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className=' text-3xl text-center text-red-600'>Reported Items</h3>
            <div>
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
                                            <td><label htmlFor='confirmation-modal' onClick={() => setDeletingItem(reportedProduct)} className='btn bg-red-600 border-none btn-sm rounded'>Delete</label></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        : <h3 className='text-3xl text-center text-red-600'> No item is marked as reported</h3>
                }
            </div>
            {
                deletingItem && <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingItem?.productName}. It can't be undone`}
                    successAction={handleDelete}
                    modalData={deletingItem}
                    successButtonName="Delete"
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ReportedItems;