import React from 'react'
import Message from '../Authentication/Message'
import SendChatForm from './SendChatForm'

function MessageArea() {
    return (
        < >
            {/* ..............message............ */}

            <div className=' h-[80%] overflow-y-auto'>


                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />

                <Message />
                <Message />
                <Message />
                <Message />
                <Message />   <Message />
                <Message />
                <Message />
                <Message />
                <Message />   <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>


            {/* ..................send chat........... */}
            <SendChatForm />
        </ >
    )
}

export default MessageArea
