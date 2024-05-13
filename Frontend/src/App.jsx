import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import { storeSocketData } from './redux/Slice/socket.Slice';
import { storeOnlineUser } from './redux/Slice/user.Slice';

function App() {

  const dispatch = useDispatch();
  const { authdata } = useSelector((state) => state.user)
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    let socket = null;

    if (authdata) {
      socket = io('http://localhost:4040', {
        query: {
          authId: authdata._id
        },
      });

      dispatch(storeSocketData(socket));

      socket.on("connect", () => {
        toast.success('Connected to server');
      });

      socket.on("disconnect", () => {
        toast.error('Disconnected from server');
      });

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(storeOnlineUser(onlineUsers));
      });

      socket.on("connect_error", (error) => {
        toast.error(`Socket connection error: ${error.message}`);
      });
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [authdata, dispatch]);
 
 
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
