import React from 'react'
import User from './User'
import { useSelector } from 'react-redux';

function UsersBox() {

  const otherUser = useSelector(state => state.user.otherUserData);


  // Check if otherUser is an array
  if (!Array.isArray(otherUser)) {
    // Handle the case where otherUser is not an array
    return <p>No other users found.</p>;
  }


  return (
    <div>
      {
        otherUser.map((user) => (
          <User key={user._id} user={user} />
        ))

      }



    </div>
  )
}

export default UsersBox
