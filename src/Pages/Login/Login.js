import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import car from '../../assets/car.png'
import GoogleSignIn from '../Shared/GoogleSignIn';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const handleLogin = data => {

    }

    return (
        <div className='min-h-screen flex justify-center items-center '>
            <img className='hidden lg:block w-1/4 mr-10' src={car} alt="" />
            <div className='w-96 p-7 shadow-lg'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-info w-full rounded' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Car Deals? <Link className='text-blue-600' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                {/* <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;