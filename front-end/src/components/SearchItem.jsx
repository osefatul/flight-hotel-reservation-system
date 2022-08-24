import React from 'react'

function SearchItem() {
    return (
        <div className="border p-2 rounded-sm flex justify-between space-x-4 mb-4">

            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="w-56 h-56 object-cover rounded-md"
            />

            <div className='flex space-x-8'>

                <div className="flex flex-col space-y-1">
                    <h1 className="text-lg font-bold text-[#0071c2]">Tower Street Apartments</h1>
                    <span className="text-sm">500m from center</span>
                    <span className="text-gray-500 text-sm">Free airport taxi</span>
                    <span className="font-bold text-sm">
                    Studio Apartment with Air conditioning
                    </span>
                    <span className="text-sm">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                    </span>
                    <span className="font-bold text-sm text-[#008009]">Free cancellation </span>
                    <span className="text-sm text-[#008009]">
                    You can cancel later, so lock in this great price today!
                    </span>
                </div>

                <div className="flex flex-col justify-between text-right">
                    <div className="space-x-2">
                        <span className='font-semibold'>Excellent</span>
                        <button className='bg-[#003580] text-white w-7 rounded-t-md rounded-r-md'>8.9</button>
                    </div>

                    <div className="text-right flex flex-col space-y-1">
                        <span className="text-lg">$112</span>
                        <span className="text-md text-gray-500">Includes taxes and fees</span>
                        <button className="bg-[#0071c2] text-white font-bold p-1 cursor-pointer rounded-sm ">See availability</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SearchItem