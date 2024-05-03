import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUser } from '../redux/Slice/otherUser.slice';

const OtherUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                // Fetch token from local storage or wherever it's stored
                const token = localStorage.getItem('authData');

                // Check if token exists
                if (!token) {
                    throw new Error('Token not found');
                }

                // Set the authorization header with the token
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                // Make the API call with the token in the header
                const res = await axios.get(`http://localhost:4040/api/user/otherUser`, config);
                console.log("other users -> ", res.data);
                dispatch(setOtherUser(res.data));
            } catch (error) {
                console.error("Error fetching other users:", error);
            }
        };

        fetchOtherUsers();
    }, [dispatch]);

    return null; // Placeholder return since hooks must return a value
}

export default OtherUser;
