import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import car from '../../assets/car.png'
import { AuthContext } from '../../contexts/AuthProvider';
import SignOut from './SignOut';

const NavbarForDashboard = () => {
    const { user } = useContext(AuthContext)
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
            user?.uid
                ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><SignOut></SignOut></li>
                    <li><label htmlFor="dashboard-drawer" className="btn  drawer-button bg-blue-500 text-white border-none  rounded-xl lg:hidden">Dashboard Menu</label></li>
                </>
                :

                <li><Link to="/login">Login</Link></li>
        }

    </React.Fragment>
    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img width={50} className='mr-2' src={car} alt="" /> CAR DEALS</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default NavbarForDashboard;