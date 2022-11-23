import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import car from '../../assets/car.png'
import GoogleSignIn from '../Shared/GoogleSignIn';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');



    const handleSignUp = data => {
        console.log(data);
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
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
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