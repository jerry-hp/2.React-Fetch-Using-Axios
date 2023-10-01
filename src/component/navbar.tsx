import React from "react";
import { Box, Image, Button, Heading } from "@chakra-ui/react";
import logo from "../assets/Asset 2.png";

interface Tp {
  backgroundImage: string;
}
export default class Navbar extends React.Component<Tp> {
  render() {
    return (
      <>
        <Box w="100%" h="max-content" borderBottom="2px solid grey" p="8px" backgroundImage={this.props.backgroundImage}>
          <Box maxW="1400px" m="0  auto" display="flex" justifyContent="space-between">
            <Box display="flex">
              <Image src={logo} w="40px" />
            </Box>
            <Heading>Food Store</Heading>
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
