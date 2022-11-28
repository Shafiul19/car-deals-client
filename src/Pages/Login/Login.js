import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import car from '../../assets/car.png'
import { AuthContext } from '../../contexts/AuthProvider';
import GoogleSignIn from '../Shared/GoogleSignIn';
import Loading from '../Shared/Loading';
// import useToken from "../../hooks/useToken";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, loading, setLoading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(data.email)
            })
            .catch(error => {
                setLoginError(error.message);
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const saveUser = (email) => {
        const user = { email };
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
                    toast.success('User Login Successful')
                }
            })
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='min-h-[700px] flex justify-center items-center shadow-xl mt-10'>
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
                        {/* <label className="label"> <span className="label-text">Forget Password?</span></label> */}
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-info w-full rounded my-3' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>

                <p className='mt-2'>New to Car Deals? <Link className='text-blue-600' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>

                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;