import { faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FlightReview({item}) {


return (
    <div className=' w-full flex flex-col items-center justify-center pt-6'>

        <div className='p-2 w-full'>
            <details>
                <summary className='w-full bg-slate-300 pl-1'>
                <FontAwesomeIcon 
                icon= {faPlaneDeparture}
                /> Flight Details
                </summary>

                <div className='text-[12px] space-y-3 pl-1 border-x pt-1 '>
                <p className=' border-b border-b-amber-600 font-bold w-max'>{item.airline} {item.code}</p>

                <div>
                    <p>From:<span className="font-bold"> {item.from}</span></p> 
                    <p>To:<span className="font-bold"> {item.to}</span></p>
                    <p>Price:<span className="font-bold"> ${item.fare}</span></p>

                </div>
            </div>
            </details>
        </div>

        <div className='p-2 w-full'>

            <details>
                <summary className='w-full bg-slate-300 pl-1 '>
                <FontAwesomeIcon 
                    icon= {faUserTie} 
                    className="pr-1"
                    />
                Traveler Details
                </summary>
                <div className='text-[12px] pl-1 border-x pt-2'>
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
            </details>

        </div>

    </div>
)
}

export default FlightReview