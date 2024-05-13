import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storedMessageData } from '../redux/Slice/message.Slice';

const getRealTimeMess = () => {
    const {socket}=useSelector((state)=>state.socket);
    const { message } = useSelector((state) => state.messages);
    const dispatch = useDispatch();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            dispatch(storedMessageData([...message, newMessage]));
        })
    },[socket,storedMessageData,message])
}

export default getRealTimeMess
