import React from 'react'
import Message from '../Authentication/Message'
import SendChatForm from './SendChatForm'

import { useDispatch, useSelector } from 'react-redux'

function MessageArea() {


    const {message} = useSelector((state) => state.messages);
    if (!message) {
      console.log( "No message found.");
    }
    return (
        < >
            {/* ..............message............ */}

            <div className='h-[40%]  md:h-[80%] border-2 border-green-500 overflow-y-auto'>


                {
                   message && message?.map((mess) => (
                        <Message key={mess._id} message={mess} />
                    ))
                }


            </div>


            {/* ..................send chat........... */}
            <SendChatForm />
        </ >
    )
}

export default MessageArea
