import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeOtherUserData } from '../redux/Slice/user.Slice';



const OtherUser = () => {
    // const dispatch = useDispatch();
const dispatch=useDispatch();
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const response = await axios.get('http://localhost:4040/api/user/otherUser');

                // Check if the response contains data
                if (response.data) {
                    // console.log("other users -> ", response.data);
                // dispatch(storeOtherUserData(response.data));
                dispatch(storeOtherUserData(response.data))
                } else {
                    console.error("Error fetching other users: Response data is undefined");
                }

            } catch (error) {
                console.error("Error fetching other users:", error);
            }
        };

        fetchOtherUsers();
    }, [dispatch]); // Make sure to include dispatch in the dependency array

    return null; // Placeholder return since hooks must return a value
}

export default OtherUser;
