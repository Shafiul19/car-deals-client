import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import errimg from '../../assets/errimg.png'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500 text-center text-2xl font-bold mt-20'>Something went wrong</p>
            <p className='text-red-500 text-center text-2xl font-bold mt-2'>{error?.status}</p>
            <p className='text-red-500 text-center text-2xl font-bold mt-2'>{error.statusText || error.message}</p>
            <img className='mx-auto' src={errimg} alt="" />
            <div className='flex justify-center'>
                <button onClick={handleLogOut} className='btn bg-red-600 border-none mr-2'>Logout</button>
                <Link className='btn bg-blue-600 border-none mr-2' to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;