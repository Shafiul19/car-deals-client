import React from 'react';

const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/z6MhJRh/bga.jpg")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content min-h-[70vh] text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-3 text-3xl font-bold">Hello Everyone!</h1>
                    <h2 className="mb-5 text-2xl font-bold">We Are Car Deals</h2>
                    <p className="mb-5 text-xl">We are one of the leading used car resale website in Bangladesh. Your are the trusted name of car resale. You can buy and sell car using our site. Don't be late. For better experience please login.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;