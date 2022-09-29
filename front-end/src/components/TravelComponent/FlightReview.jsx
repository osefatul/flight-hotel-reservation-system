import { faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FlightReview({item}) {


return (
    <div className=' w-full flex flex-col items-center justify-center pt-2'>

        <div className='p-2 w-full'>
            <div>
                <div className='w-full bg-slate-300 pl-1 flex items-center justify-between'>
                    <div>
                        <FontAwesomeIcon 
                        icon= {faPlaneDeparture}
                        /> Flight Details
                    </div>

                    <div className="bg-red-700 text-white px-2 rounded-sm cursor-pointer text-[12px] p-1" >
                            Delete
                    </div>
                </div>

                <div className='text-[12px] space-y-3 pl-1 border-x pt-1 '>
                    <p className=' border-b border-b-amber-600 font-bold w-max'>{item.airline} {item.code}</p>

                    <div>
                        <p>From:<span className="font-bold"> {item.from}</span></p> 
                        <p>To:<span className="font-bold"> {item.to}</span></p>
                        <p>Price:<span className="font-bold"> ${item.fare}</span></p>

                    </div>

                    <div className='w-full font-bold'>
                        <FontAwesomeIcon 
                            icon= {faUserTie} 
                            className="pr-1"
                            />
                        Traveler Details
                    </div>

                    <div className='text-[12px]'>
                        <p>Name:
                            <span className="font-bold">{" "}
                            {/* {SelectedUsersDetail.firstName} {SelectedUsersDetail.lastName}  */}
                            </span>
                        </p> 
                        
                        <p>Birthday:
                            <span className="font-bold">{" "} 
                            {/* {new Date(SelectedUsersDetail.birthdate).toDateString()} */}
                            </span>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default FlightReview