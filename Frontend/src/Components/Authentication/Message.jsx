import React from 'react'
import { useSelector } from 'react-redux'

function Message({ message }) {
  const { authdata, selectedUser } = useSelector((state) => state.user);

  return (



    <div className={`chat p-4  ${authdata?._id === message?.senderId ? 'chat-end' : 'chat-start'} `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={`${message?.senderId === authdata?._id ? authdata?.profilePhoto : selectedUser?.profilePhoto}`} />
        </div>
      </div>
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">{message?.message}</div>

    </div>

  )
}

export default Message
