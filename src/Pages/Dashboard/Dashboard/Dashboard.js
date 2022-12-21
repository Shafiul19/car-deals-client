import React from 'react';

const Dashboard = () => {
    return (
        <div className='flex flex-col'>
            <h3 className="text-4xl text-blue-700 font-bold mt-10 mb-10  text-center">Please select a options from Dashboard menu</h3>
            <label htmlFor="dashboard-drawer" className="btn  drawer-button bg-blue-800 text-white border-none mb-5  rounded lg:hidden">Dashboard Menu</label>
            {/* <img className='w-full ' src="https://i.ibb.co/z6MhJRh/bga.jpg" alt="" /> */}
        </div>
    );
};

export default Dashboard;