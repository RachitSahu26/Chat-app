import React from 'react';
import { useSelector } from 'react-redux';

function User() {
    // Get other user data from the Redux store
    const otherUser = useSelector(state => state.user.otherUserData);
    console.log("this is the data of the other user api", otherUser)

    // Check if otherUser is an array
    if (!Array.isArray(otherUser)) {
        // Handle the case where otherUser is not an array
        return <p>No other users found.</p>;
    }

    return (
        <>
            {/* Map through otherUser array and render each user */}
            {otherUser.map((user, index) => (
                <div key={index} className=' border-2 m-2 flex p-2 border-black h-20 rounded-lg' >
                    <div className=' flex text-white  w-full '>
                        {/* Assuming otherUserData contains an image URL */}
                        <div className=' ' >
                            <img className=' w-10 rounded-2xl' src={user.profilePhoto} alt={`User ${index}`} />
                        </div>
                        <div className=' ml-3 p-1 w-full '>
                            {/* Assuming otherUserData contains name and description */}
                            <h2>{user.fullName}</h2>
                            {/* <p className='text-[10px]'>{user.description}</p> */}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default User;
