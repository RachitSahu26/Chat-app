import React from 'react'

function Message() {
  return (


  
    <div class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div class="chat-header">
      Obi-Wan Kenobi
      <time class="text-xs opacity-50">12:45</time>
    </div>
    <div class="chat-bubble">You were the Chosen One!</div>
    <div class="chat-footer opacity-50">
      Delivered
    </div>
  </div>
 
  )
}

export default Message
