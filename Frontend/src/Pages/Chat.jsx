import React, { useEffect } from 'react';
import UsersBox from '../Components/UsersContainer/UsersBox';
import { useDispatch, useSelector } from 'react-redux';
import otherUser from '../hooks/otherUser';
import fetchMessage from '../hooks/fetchMessage';
import getRealTimeMess from '../hooks/getRealTimeMess';
import MessageContainer from '../Components/MessageContainer/MessageContainer';
import { clearSelectedUser } from '../redux/Slice/user.Slice';
import { useNavigate, useLocation } from 'react-router-dom';
import useMedia from 'use-media';

function Chat() {
  const { authdata } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  // Media query to check if screen width is less than or equal to 768px
  const isMobile = useMedia({ maxWidth: 768 });

  useEffect(() => {
    if (location.pathname === '/chat') {
      dispatch(clearSelectedUser());
    }
  }, [location, dispatch]);


  otherUser();
  fetchMessage();
  getRealTimeMess();


  return (
    <div className='h-screen bg-purple-950 flex justify-center'>
    {isMobile ? (
      <div className='w-full p-5'>
        <MessageContainer />
      </div>
    ) : (
      <div className='w-[80%] p-5 flex justify-evenly'>
        <div className='w-full bg-purple-700 overflow-y-auto p-5 rounded-lg'>
          <UsersBox />
        </div>
        <div className='w-full justify-center m-3'>
          <MessageContainer />
        </div>
      </div>
    )}
  </div>
  );
}

export default Chat;
