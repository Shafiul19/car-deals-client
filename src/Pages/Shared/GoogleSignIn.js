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
        const role = "buyer"

        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(user?.displayName, user?.email, role);
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }



    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch(`https://car-deals-server.vercel.app/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const accessToken = data?.data;
                if (accessToken) {
                    localStorage.setItem("accessToken", accessToken);
                    navigate(from, { replace: true });
                    toast.success('User Login Successfully')
                }

            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn  border-none w-full rounded'><FcGoogle className='mr-2' /> CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default GoogleSignIn;