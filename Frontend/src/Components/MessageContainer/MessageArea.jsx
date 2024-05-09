import React from 'react'
import Message from '../Authentication/Message'
import SendChatForm from './SendChatForm'
import { useSelector } from 'react-redux'

function MessageArea() {

    const {message} = useSelector((state) => state.messages);
    if (!message) {
      console.log( "No message found.");
    }
    return (
        < >
            {/* ..............message............ */}

            <div className=' h-[80%] overflow-y-auto'>

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
