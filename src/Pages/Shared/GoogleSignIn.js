import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from './Loading';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const GoogleSignIn = () => {
    const { googleSignIn, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    console.log(from);

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
        toast.success('User Logged in successfully');
    }
    const handleGoogleSignIn = () => {
        const role = "Buyer"

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
            .finally(setLoading(false))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);
            })

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn  border-none w-full rounded'><FcGoogle className='mr-2' /> CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default GoogleSignIn;