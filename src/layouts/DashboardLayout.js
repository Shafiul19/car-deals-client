import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';

import NavbarForDashboard from '../Pages/Shared/NavbarForDashboard';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <NavbarForDashboard></NavbarForDashboard>
            <div className="drawer  drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-11/12 mx-auto">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu px-4 pt-16  w-80 bg-white lg:bg-transparent text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='btn btn-info w-full text-white my-2' to='/dashboard/myorder'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li><Link className='btn btn-info w-full text-white my-2' to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link className='btn btn-info w-full text-white my-2' to='/dashboard/allsellers'>All Seller</Link></li>
                                <li><Link className='btn btn-info w-full text-white my-2' to='/dashboard/reporteditems'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link className='btn btn-info w-full text-white my-2' to='/dashboard/addproduct'>Add a product</Link></li>
                                <li><Link className='btn btn-info w-full text-white my-2' to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;