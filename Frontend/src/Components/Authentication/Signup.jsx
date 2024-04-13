import React, { useState } from 'react' 
 import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack }  from "@chakra-ui/react";
function Signup() {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);



const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmpassword,setConfirmpassword]=useState("");
// const [postDetails,postDetails]=useState("");
const submitHandler=()=>{

}

  return (
    <VStack spacing="5px">
   {/* ..........name....... */}
    <FormControl id="first-name" isRequired>
      <FormLabel>Name</FormLabel>
      <Input
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
    </FormControl>
   
   
    {/* ..........Email....... */}
    <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type="email"
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
  
   {/* ..........Password....... */}
  
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
   
   
    {/* ..........confirm password....... */}
   
   
    <FormControl id="password" isRequired>
      <FormLabel>Confirm Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="Confirm password"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  
  
   {/* ..........updoad picture....... */}
    <FormControl id="pic">
      <FormLabel>Upload your Picture</FormLabel>
      <Input
        type="file"
        p={1.5}
        accept="image/*"
        onChange={(e) => postDetails(e.target.files[0])}
      />
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
