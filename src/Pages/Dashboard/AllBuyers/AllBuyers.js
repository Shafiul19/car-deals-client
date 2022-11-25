import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading';

const AllBuyers = () => {
    const { data: allbuyers = [], isLoading } = useQuery({
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

    const handleDeleteBuyer = (id) => {
        console.log(id);
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
                        {allbuyers.map((buyer, i) => <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button onClick={() => handleDeleteBuyer(buyer._id)} className='btn btn-sm bg-red-600 rounded border-none'>Delete</button></td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;