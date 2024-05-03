import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import axios from 'axios';

// Import axiosInstance
import { useDispatch } from "react-redux";
import {  storeApiData } from '../../redux/Slice/authSlice';
import toast from 'react-hot-toast';

function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const distpach = useDispatch()
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });


  };





  const submitHandler = async () => {
    try {
      const res = await axios.post(`http://localhost:4040/api/auth/register`, signupData);
      console.log(res);

      if (res.data.message) {
       
        toast.success(res.data.message);



      } else {
        toast.error("Error in registration",);
      }

      if (res.data) {
        distpach(storeApiData(res.data));
        // Do something with the response
      }
      setSignupData({
        name: "",
        email: "",
        password: ""
      })




    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  };

  return (
    <VStack spacing="5px">
      {/* ..........name....... */}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="name"
          placeholder="Enter Your Name "
          name="name"
          onChange={handleUserInput}
          value={signupData.name}
        />
      </FormControl>

      {/* ..........Email....... */}
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          name="email"
          onChange={handleUserInput}
          value={signupData.email}
        />
      </FormControl>

      {/* ..........Password....... */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            onChange={handleUserInput}
            value={signupData.password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* ..........signup btn....... */}
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default Signup;
