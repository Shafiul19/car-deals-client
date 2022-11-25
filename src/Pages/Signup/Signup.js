import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import car from '../../assets/car.png'
import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';
import GoogleSignIn from '../Shared/GoogleSignIn';
import Loading from '../Shared/Loading';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, loading, setLoading } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const navigate = useNavigate();



    const handleSignUp = data => {

        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                        console.log('user created successfully');
                    })
                    .catch(err => console.error(err))
            })
            .catch(error => {
                toast.error(error.message);
                setSignUpError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })

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
                navigate('/');
                toast.success('User Created Successfully')
            })
    }


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <img className='hidden lg:block w-1/4 mr-10' src={car} alt="" />
            <div className='w-96 p-7 shadow-lg'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email is required"
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 character or longer' }
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }

                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select a role</span>
                        </label>
                        <select className='select select-info' {...register("role", {
                            required: "Roll is required"
                        })}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    <input className='btn btn-info rounded w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link className='text-blue-600' to='/login'>please login</Link></p>
                <div className='divider'>OR</div>
                <GoogleSignIn></GoogleSignIn>
            </div >
        </div >
    );
};

export default Signup;