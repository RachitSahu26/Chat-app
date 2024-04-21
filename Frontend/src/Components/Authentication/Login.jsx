import React, { useState } from 'react'

import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
function Login() {



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
    })
  }




  return (
    <VStack spacing="5px">



      {/* ..........Email....... */}
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          name="name"
          placeholder="Enter Your Email Address"
         
          value={signupData.name}
          onChange={handleUserInput}
        />
      </FormControl>

      {/* ..........Password....... */}

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"

    
            value={signupData.password}
            onChange={handleUserInput}


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
        Login
      </Button>



    </VStack>
  )
}

export default Login
