import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
function Signup() {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);



  // ....login data Stored...
  const [loginData, setLogindata] = useState({
    name: "",
    email: "",
    password: ""
  })


  // ..............change input data handler...........
  const handleUserInput = (e) => {

    const { name, value } = e.target;
    setLogindata({
      ...loginData,
      [name]: value
    })
  }

  const submitHandler = () => {

    if (!loginData.name || !loginData.email || !loginData.password) {
      toast.error("Please fill all the details");
      return;
    } 



  }



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
          value={loginData.name}
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
          value={loginData.email}
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
            value={loginData.password}
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
  )
}

export default Signup
