
import React from 'react'
import MessageArea from '../Components/MessageContainer/MessageArea'
import UsersBox from '../Components/UsersContainer/UsersBox'
import otherUser from '../hooks/otherUser'

import { useNavigate } from 'react-router-dom'
import { storeAuthData } from '../redux/Slice/user.Slice'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import fetchMessage from '../hooks/fetchMessage'
import axios from 'axios'

function Chat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const { authdata } = useSelector((state) => state.user)
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:4040/api/auth/logout")

      // console.log(res)
      toast.success(res.data.message);
      dispatch(storeAuthData(null));
      navigate("/")


    } catch (error) {
      console.log(error);
    }
  }

  otherUser();
  fetchMessage();
  return (
    <div className=' h-screen bg-purple-950 flex justify-center   '>




      <div className='w-[80%]  p-5 flex justify-evenly  border-2 border-black  ' >




        <div className='flex flex-col justify-between'>

          <div className='rounded-lg border-2 border-yellow-500'>
            <h3 className='bg-black text-white p-5 rounded-lg '>{authdata?.fullName}</h3>
          </div>

          <div>
            <button onClick={logoutHandler} className='bg-black text-white border-2 border-white p-3 rounded-lg' >Logout</button>

          </div>
       
        </div>

        {/* ...................side bar......... */}


        <div className='  w-[30%] bg-purple-700  overflow-y-auto p-5 rounded-lg'  >
          <UsersBox />

        </div>








        {/* ....................message area........... */}
        <div className=' border-2   p-5 w-1/2 border-red-500 rounded-lg '>
          <div className='flex gap-2 items-center border-2  rounded-lg bg-zinc-800 text-white px-4 py-2 mb-2'>
            <div >
              <div className='w-12 rounded-full'>
                <img className='rounded-2xl' src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>
            <div className='flex flex-col flex-1'>
              <div className='flex justify-between gap-2'>
                <p>{selectedUser?.fullName}</p>
              </div>
            </div>
          </div>


          <MessageArea />







        </div>





      </div>




    </div>
  )
}

export default Chat
