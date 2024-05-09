import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import { storedMessageData } from '../redux/Slice/message.Slice';
const fetchMessage = () => {
const dispatch= useDispatch();
    const selectedUer = useSelector((state) => state.user.selectedUser);
    // console.log("goted from the store using UseSelector", selectedUer);
    useEffect(() => {
        const userMessage = async () => {
            try {
                const res = await axios.get(`http://localhost:4040/api/message/${selectedUer?._id}`);
                // console.log(res.data);
                dispatch(storedMessageData(res.data))
            } catch (error) {
                console.log(error);

            }

        }
        userMessage();
    }, [selectedUer])



}

export default fetchMessage
