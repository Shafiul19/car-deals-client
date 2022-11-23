import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const SignOut = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                if (user) {
                    toast.success(`${user?.displayName} has been sign out `)
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <button onClick={handleLogOut} >Sign Out</button>
        </div>
    );
};

export default SignOut;