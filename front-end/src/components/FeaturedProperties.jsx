import React from 'react'

function FeaturedProperties() {
    return (
            <div className="w-full flex space-between space-x-4">
            
                <div className="w-full flex flex-col justify-between space-y-2 ">
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="w-full h-28 sm:h-32 object-cover rounded-lg"/>
                    
                    <div className='flex flex-col justify-between space-y-3'>

                    <span className=" text-[12px] sm:text-[18px] text-[#333] font-bold">Aparthotel Stare Miasto</span>
                    <span className="text-[11px] sm:text-[15px]">Madrid</span>
                    <span className="text-[11px] sm:text-[15px] font-bold">Starting from $120</span>
                    <div className="">
                        <button className="bg-[#003580] text-white font-bold p-1 mr-[5px] rounded-md text-[11px] sm:text-[15px]">8.9</button>
                        <span className='text-[11px] sm:h-[15px]'>Excellent</span>
                    </div>
                    </div>
                </div>
            
                <div className="w-full flex flex-col justify-between space-y-2 ">
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="w-full h-28 sm:h-32 object-cover rounded-lg"
                    />

                    <div className='flex flex-col justify-between space-y-3'>

                    <span className="text-[12px] sm:text-[18px] text-[#333] font-bold">Comfort Suites Airport</span>
                    <span className="text-[11px] sm:text-[15px]">Austin</span>
                    <span className="text-[11px] sm:text-[15px] font-bold">Starting from $140</span>
                    <div className="">
                    <button className="bg-[#003580] text-white font-bold p-1 mr-[5px] rounded-md text-[11px] sm:text-[15px]">9.3</button>
                    <span className='text-[11px] sm:h-[15px]'> Excellent</span>
                    </div>
                    </div>
                </div>
            
                <div className=" w-full flex flex-col space-y-2">
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="w-full h-28 sm:h-32 object-cover rounded-lg"
                    />

                    <div className='flex flex-col justify-between space-y-3'>
                    <span className="text-[12px] sm:text-[18px] text-[#333] font-bold">Four Seasons Hotel</span>
                    <span className="text-[11px] sm:text-[15px]">Lisbon</span>
                    <span className="text-[11px] sm:text-[15px] font-bold">Starting from $99</span>
                    <div className="">
                        <button className="bg-[#003580] text-white font-bold p-1 mr-[5px] rounded-md text-[11px] sm:text-[15px]">8.8</button>
                        <span className='text-[11px] sm:h-[15px]'>Excellent</span>
                    </div>
                    </div>
                </div>
                
                <div className="w-full flex flex-col justify-between space-y-2 ">
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                    alt=""
                    className="w-full h-28 sm:h-32 object-cover rounded-lg"
                    />
                    
                    <div className='flex flex-col justify-between space-y-3'>
                    <span className="text-[12px] sm:text-[18px] text-[#333] font-bold">Hilton Garden Inn</span>
                    <span className="text-[11px] sm:text-[15px]">Berlin</span>
                    <span className="text-[11px] sm:text-[15px] font-bold">Starting from $105</span>
                        <div className="fpRating">
                        <button className="bg-[#003580] text-white font-bold p-1 mr-[5px] rounded-md text-[11px] sm:text-[15px]">8.9</button>
                        <span className='text-[11px] sm:h-[15px]'>Excellent</span>
                    </div>
                    </div>
                </div>
            </div>
        );
}

export default FeaturedProperties