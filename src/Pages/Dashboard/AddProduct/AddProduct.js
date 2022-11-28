import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://car-deals-server.vercel.app/catgories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        productName: data.productName,
                        category: data.productCategory,
                        location: data.location,
                        productCondition: data.productCondition,
                        originalPrice: data.originalPrice,
                        resellPrice: data.resellPrice,
                        yearsOfUse: data.yearsOfUse,
                        yearOfPurchase: data.yearOfPurchase,
                        mobile: data.mobile,
                        verified: false,
                        postingTime: new Date(),
                        sellerName: user.displayName,
                        sellerEmail: user.email,
                        image: imgData.data.url,
                        status: "available"
                    }
                    // save product information to database

                    fetch(`https://car-deals-server.vercel.app/products?email=${user?.email}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorizaion: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                toast.success(`${data.productName} is added`)
                                navigate('/dashboard/myproducts')
                            }
                        })
                }
            })
    }
    return (
        <div>
            <p className='text-3xl text-center'>Add Product</p>
            <form className='grid md:grid-cols-2 lg:grid-cols-3 gap-4' onSubmit={handleSubmit(handleAddProduct)} >
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text"
                        {...register("productName", {
                            required: "Product name is required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text"
                        {...register("location", {
                            required: "Location is required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="text"
                        {...register("originalPrice", {
                            required: "Original Price is required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Resell Price</span>
                    </label>
                    <input type="text"
                        {...register("resellPrice", {
                            required: "Resell Price is required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.resellPrice && <p className='text-red-500'>{errors.resellPrice.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Years of use</span>
                    </label>
                    <input type="text"
                        {...register("yearsOfUse", {
                            required: "Years of use is required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.yearsOfUse && <p className='text-red-500'>{errors.yearsOfUse.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Year of purchase</span>
                    </label>
                    <input type="text"
                        {...register("yearOfPurchase", {
                            required: "Year of purchase is required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.yearOfPurchase && <p className='text-red-500'>{errors.yearOfPurchase.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="text"
                        {...register("mobile", {
                            required: "Mobile number is required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Condition</span>
                    </label>
                    <select  {...register("productCondition", {
                        required: "Product Condition is required"
                    })}
                        className="select select-bordered w-full max-w-xs">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    {errors.productCondition && <p className='text-red-500'>{errors.productCondition.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select  {...register("productCategory", {
                        required: "Category is required"
                    })}
                        className="select select-bordered w-full max-w-xs">
                        {categories?.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
                    </select>
                    {errors.productCategory && <p className='text-red-500'>{errors.productCategory.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", {
                            required: "Photo is required"
                        })}
                        className="file-input file-input-bordered file-input-lg w-full max-w-xs"
                    />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                <input className='btn btn-accent w-full md:col-span-2 lg:col-span-3  mt-4' value="Add product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;