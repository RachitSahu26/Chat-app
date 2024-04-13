import React, { useState } from 'react'

import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack }  from "@chakra-ui/react";
function Login() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



    const submitHandler=()=>{

    }

  return (
    <VStack spacing="5px">
   
    
    
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
