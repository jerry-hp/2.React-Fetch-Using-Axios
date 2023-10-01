import React from "react";
import { Box, Image, Button, Heading } from "@chakra-ui/react";
import logo from "../assets/Asset 2.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <Box w="100%" h="max-content" borderBottom="1px solid grey" p="8px">
          <Box maxW="1200px" m="0  auto" display="flex" justifyContent="space-between">
            <Box display="flex">
              <Image src={logo} w="40px" />
            </Box>
            <Heading color={"#040404"}>Food Store</Heading>
            <Box display="flex" gap="10px">
              <Button bg="green" color="white">
                Login
              </Button>
              <Button bg="red" color="white">
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
