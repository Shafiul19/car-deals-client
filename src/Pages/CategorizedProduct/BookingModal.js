import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ booking, setBooking, refetch }) => {
    console.log(booking);
    const { user } = useContext(AuthContext);
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const meetingLocation = form.meetingLocation.value;


        const booking = {
            name,
            email,
            phone,
            productName,
            price,
            meetingLocation
        }
        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null);
                    toast.success('Booking Confirm');
                    refetch();
                } else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <div>
            <section>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{booking.productName}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                            <input type="text" name='productName' disabled defaultValue={booking.productName} className="input w-full input-bordered" />
                            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                            <input type="text" name="price" placeholder='price' defaultValue={booking?.resellPrice} disabled className="input w-full input-bordered" />
                            <input name='phone' type="text" placeholder="Phone No" className="input w-full input-bordered" required />
                            <input type="text" name='meetingLocation' placeholder='Meeting Location' className="input w-full input-bordered" required />
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingModal;