import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../../components/adminComponents/components/sidebar/Sidebar';
import Navbar from '../../../../components/Navbar';
import { fetchingHotels } from '../../../../features/hotelSlice/hotelAction';
import { creatingRoom } from '../../../../features/roomSlice/roomAction';
import { EraseRoomMessage } from '../../../../features/roomSlice/roomSlice';

function NewRoom() {

  const dispatch = new useDispatch()
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const {isLoading, hotels} = useSelector(state => state.hotels)
  const {message} = useSelector(state => state.rooms)


const handleChange = (e) =>{
  setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
}

const handleClick = async (e) => {
  e.preventDefault();
  const roomNumbers = rooms.split(',').map(room => ({number: room}))

  try{
    await dispatch(creatingRoom( {...info, roomNumbers} ,hotelId))

  }catch(e){
    console.log(e)
  }
}

useEffect(()=>{
  setTimeout(()=>{
    dispatch(EraseRoomMessage())
  },5000)
},[message])


useEffect(()=>{
  dispatch(fetchingHotels())
},[])


  return (

    <div>
      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>

      {message.message && <div className=" bg-green-600 w-full text-white text-small rounded flex items-center justify-center m-2">{message.message}</div> }
      
      <div className="flex w-full">
        <div className="w-[15%]">
        <Sidebar />
        </div>

        <h1 className=" absolute font-bold text-[18px] top-20 left-40">Create New Room</h1>

        <form className="flex w-[85%] items-center justify-center relative pl-20">
          <div className=" w-[50%] flex flex-col space-y-1 justify-center p-10 ">
            
              {/* Inputs */}
              <div className="flex flex-col space-y-2 w-full">

                <div className="text-[12px] w-full ">
                  <input type="text"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                  id="title"
                placeholder="Title"
                onChange={handleChange}/>
                </div>

                <div className="text-[12px] w-full ">
                  <input type="number"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm w-full" 
                  placeholder="Price"
                  id="price"
                  onChange={handleChange} />
                </div>
                
                <div className="text-[12px] w-full ">
                  <input type="text" placeholder="Max No. of People"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="maxPeople"
                onChange={handleChange} />
                </div>
              
                <div className="text-[12px] w-full ">
                  <input type="text"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder="Description"
                id="desc"
                onChange={handleChange} />
                </div>

                <div className="text-[12px] w-full ">
                  <textarea
                  className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder="Rooms - give comma between room numbers. "
                id="roomNumbers"
                onChange={(e) => setRooms(e.target.value)}/>
                </div>


                {/* Fetch hotels */}
                <div className="flex flex-col space-y-2">
                <label>Choose a hotel:</label>
                <select
                  id="hotelId"
                  className=" border border-1 w-full"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {isLoading
                    ? "loading"
                    : hotels &&
                      hotels?.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>

              </div>              
            
            {/* submit button */}
            <div className="flex flex-col items-start w-full ">
              <button  
              onClick={handleClick} 
              className="border border-1 bg-blue-800 mt-4 text-white rounded-sm w-full ">Create</button>
            </div>

          </div>
        </form>


      </div>

    </div>
  
  


  );
}

export default NewRoom