import React, { useState } from 'react'

import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
function Login() {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);




  // ....login data Stored...
  const [loginData, setLogindata] = useState({

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





  const submitHandler =async () => {

const res= await axios.post(`http://localhost:4040/api/auth/login`,loginData)



  }


  return (
    <VStack spacing="5px">



      {/* ..........Email....... */}
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter Your Email Address"

          value={loginData.email}

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
            name='password'

            value={loginData.password}
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
