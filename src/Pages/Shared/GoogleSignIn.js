import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from './Loading';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';

const GoogleSignIn = () => {
    const { googleSignIn, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <Loading></Loading>
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('User Logged in successfully');
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message);

            })
            .finally(setLoading(false))
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn  border-none w-full rounded'><FcGoogle className='mr-2' /> CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default GoogleSignIn;