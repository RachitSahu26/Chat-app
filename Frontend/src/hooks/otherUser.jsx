import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";

import { setOtherUser } from '../redux/Slice/otherUser.slice';



const otherUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {

                const res = await axios.get(`http://localhost:4040/api/user/otherUser`);
                // store
                console.log("other users -> ", res);
                dispatch(setOtherUser(res));

            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [])

}

export default otherUser