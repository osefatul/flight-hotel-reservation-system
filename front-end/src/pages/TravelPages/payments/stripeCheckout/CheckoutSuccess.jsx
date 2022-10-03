import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../../../components/Navbar';
import { clearCart } from '../../../../features/cartSlice/cartSlice';

function CheckoutSuccess() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);
    
return (
<div className='text-black '>

    <div className ="bg-black sticky z-50 top-0 ">
            <Navbar  />
    </div>

        <h1 className='flex justify-center pt-5 font-bold text-lg sm:text-xl'>
        Thank you for choosing Travel & Stay.
        </h1>

        <div className='flex items-center justify-center text-start text-sm flex-col'>
            <p>Your order might take some time to process.</p>
            <p>Check your order status at your profile after about 10mins.</p>
            <p>
                Incase of any enquiries contact the support at{" "}
                <strong className='font-bold'>support@TravelAndStay.com</strong>
            </p>
        </div>
    
    
</div>
)
}

export default CheckoutSuccess