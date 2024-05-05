import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUser } from '../redux/Slice/otherUser.slice';

const OtherUser = () => {
    const authData = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchOtherUsers = async () => {



            // try {
            //     // Check if token exists
            //     if (!authData.token) {
            //         throw new Error('Token not found');
            //     }

            //     // Set the authorization header with the token
            //     const config = {
            //         headers: {
            //             'Authorization': `Bearer ${authData.token}`
            //         }
            //     };

            //     // Make the API call with the token in the header
            //     const res = await axios.get(`http://localhost:4040/api/user/otherUser`, config);
            //     console.log("other users -> ", res.data);



            //     if (res.data.success) {

            //         dispatch(setOtherUser(res.data));
            //         toast.success(res.data.success);
            //     } else {

            //         toast.error(response.data.message, {
            //             position: "top-center",
            //             autoClose: 2000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //             theme: "dark",
            //             style: {
            //                 borderRadius: '10px',
            //                 color: "red"
            //             },
            //         });
            //     }

            //     // Handle the response data as needed
            // } catch (error) {
            //     console.error("Error fetching other users:", error);
            // }


            try {
                axios.defaults.withCredentials = true;
                const res = axios.get('http://localhost:4040/api/user/otherUser');

                // store
                console.log("other users -> ", res);
                dispatch(setOtherUser(res.data));

            } catch (error) {
                console.log(error);
            }

        };

        fetchOtherUsers();
    }, []);

    return null; // Placeholder return since hooks must return a value
}

export default OtherUser;
