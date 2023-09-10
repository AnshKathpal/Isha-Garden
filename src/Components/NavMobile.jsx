import { Box,Flex } from "@chakra-ui/react";
import React from "react";

import logo from "../Images/logo2.jpg";

export const NavMobile = () => {
  return (
    <Flex
      bg="white"
      w="100%"
      h="80px"
      pos="fixed"
      border={"1px solid red"}
      zIndex={"100"}
      justify = "flex-start"
      align={"center"}
    >
      <img style = {{width : "50%" , marginLeft : "5%"}} src={logo} alt="" />
    </Flex>
  );
};
