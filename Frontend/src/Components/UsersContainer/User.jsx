import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeSelectedUser } from '../../redux/Slice/user.Slice';
import { useNavigate } from 'react-router-dom';
// import { useMediaQuery } from '@react-hook/media-query'; // Import useMediaQuery

function User(props) {
    const userData = props.user;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedUser = useSelector(state => state.user.selectedUser);
    const { onlineUser } = useSelector((state) => state.user);
    const isOnline = onlineUser?.includes(userData._id);

    // Use the useMediaQuery hook to get the current screen size
    // const isMobile = useMediaQuery('(max-width: 768px)');

    // Function to handle user selection based on screen size
    const handleUserSelection = (selectData) => {

            dispatch(storeSelectedUser(selectData));
     
    };

    return (
        <>
            <div
                onClick={() => handleUserSelection(userData)}
                className={`${selectedUser?._id === userData?._id ? 'bg-black' : ''
                    } h-auto border-2 m-2 flex p-2 hover:bg-black hover:border-5 hover:border-yellow-600 cursor-pointer border-white  rounded-lg`}
            >
              
              
                <div className={`${selectedUser?._id === userData?._id ? 'text-yellow-500' : 'text-white'} p-3 h-auto   flex text-white hover:text-white w-full flex-col md:flex-row `}>
                    <div className={`avatar ${isOnline ? 'online' : ''}`}>
                        <div className='w-12 rounded-full'>
                            <img src={userData.profilePhoto} alt="user-profile" />
                        </div>
                    </div>
                    <div className=' h-auto  item-center p-1 w-full '>
                        <h2 className=' text-[10px] sm:text-xl '>{userData.fullName}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;
