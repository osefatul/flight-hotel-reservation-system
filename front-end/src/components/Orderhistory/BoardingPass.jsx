import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./boardingPass.css"

function BoardingPass() {

    const location = useLocation();

    const [booking, setBooking] = useState(location.state.formData);


return (
<div className='bg-white w-[120%]'>

<div className="box">
    <ul className="left">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    
    <ul className="right">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div className="ticket">
    <span className="airline">{booking.airline}</span>
    <span className="airline airlineslip">{booking.airline}</span>
    <span className="boarding">Boarding pass</span>
    <div className="content">
    <span className="jfk">{booking.from}</span>
    <span className="plane"><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
    <span className="sfo">{booking.to}</span>
    
    <span className="jfk jfkslip">{booking.from}</span>
    <span className="plane planeslip"><svg clip-rule="evenodd" fill-rule="evenodd" height="50" width="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
    <span className="sfo sfoslip">{booking.to}</span>
    <div className="sub-content">
        <span className="watermark">{booking.airline}</span>
        <span className="name">PASSENGER NAME<br/><span>{booking.lastName}, {
    booking.firstName
}</span></span>
        <span className="flight">FLIGHT N&deg;<br/><span>{
        booking.code
        }</span></span>
        <span className="seat">SEAT<br/><span>45A</span></span>
        <span className="boardingtime">BOARDING ON<br/><span>{booking.date}</span></span>
            
        <span className="flight flightslip">FLIGHT N&deg;<br/><span>{
        booking.code
        }</span></span>
        <span className="seat seatslip">SEAT<br/><span>45A</span></span>
        <span className="name nameslip">PASSENGER NAME<br/><span>{
        booking.lastName
        }, {booking.firstName}</span></span>
    </div>
    </div>
    <div className="barcode"></div>
    <div className="barcode slip"></div>
    </div>
</div>
</div>
)


}

export default BoardingPass