import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeSelectedUser } from '../../redux/Slice/user.Slice';

function User(props) {
    const userData = props.user

    const dispatch = useDispatch();

    const selectedUsser = useSelector(state => state.user.selectedUser);
    const { onlineUser } = useSelector((state) => state.user);


    const isOnline = onlineUser?.includes(userData._id);

   
    // ..................selected user.........
    const selectedUser = (selectData) => {

        dispatch(storeSelectedUser(selectData))
    }

    return (
        <>
            {/* Map through otherUser array and render each user */}

            <div
                onClick={() => selectedUser(userData)}
                className={`${selectedUsser?._id === userData?._id ? 'bg-black  ' : ''
                    } border-2 m-2 flex p-2 hover:bg-black hover:border-5 hover:border-yellow-600    cursor-pointer border-black h-20 rounded-lg`}
            >
                <div className={` ${selectedUsser?._id === userData?._id ? 'text-yellow-500 ' : 'text-white'} flex text-white   hover:text-white w-full `}>
                    {/* Assuming otherUserData contains an image URL */}

                    <div className={`avatar ${isOnline ? 'online' : ''}`}>
                        <div className='w-12 rounded-full'>
                            <img src={userData.profilePhoto} alt="user-profile" />
                        </div>
                    </div>












                    <div className=' ml-3 p-1 w-full '>
                        {/* Assuming otherUserData contains name and description */}
                        <h2>{userData.fullName}</h2>
                        {/* <p className='text-[10px]'>{user.description}</p> */}
                    </div>

                </div>

            </div>

        </>
    );
}

export default User;
