import axios from 'axios';
import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'; // Import IoSend icon from react-icons/io5
import { useDispatch, useSelector } from 'react-redux';
import { storedMessageData } from '../../redux/Slice/message.Slice';

function SendChatForm() {

    const selectedUssr = useSelector((state) => state.user.selectedUser)
    console.log(" selected fdfdfdsfdfdsfd", selectedUssr);
    const [getMessage, setGetMessage] = useState("");
    const dispatch = useDispatch();
    const message = useSelector((state) => state.messages.message)



    const submitMessageHandler = async (e) => {



        console.log(getMessage);

        try {
            e.preventDefault();

            const res = await axios.post(`http://localhost:4040/api/message/send/${selectedUssr?._id}`,
                {
                    message: getMessage
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })
            console.log("created mmmmmmmmmmm", res.data);
            dispatch(storedMessageData([...message, res?.data?.newMessage]))




        } catch (error) {
            console.log("errror in the posting message", error);
        }

        setGetMessage("");

    }
    return (
        <form onSubmit={submitMessageHandler} className='px-4 my-3'>
            <div className='w-full relative'>
                <input
                    value={getMessage}
                    onChange={(e) => setGetMessage(e.target.value)}
                    type="text"
                    placeholder='Send a message...'
                    className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white'
                />
                <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <IoSend />
                </button>
            </div>
        </form>
    )
}

export default SendChatForm
