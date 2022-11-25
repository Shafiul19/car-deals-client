import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal'

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null)

    const closeModal = () => {
        setDeletingBuyer(null)
    }

    const { data: allbuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['allbuyes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers')
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteBuyer = (buyer) => {
        fetch(`http://localhost:5000/buyer/${buyer._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${buyer.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <h3 className='text-center text-3xl text-blue-600 my-4'> All Buyers Info</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allbuyers.map((buyer, i) => <tr className='hover' key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><label htmlFor="confirmation-modal" onClick={() => setDeletingBuyer(buyer)} className='btn btn-sm bg-red-600 rounded border-none'>Delete</label></td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={'Are you sure want to delete'}
                    message={`If you delete ${deletingBuyer.name}. It can't be undone`}
                    successAction={handleDeleteBuyer}
                    modalData={deletingBuyer}
                    successButtonName="Delete"
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;