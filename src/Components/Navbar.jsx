import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

import { VscHeart } from "react-icons/vsc";

export const Navbar = () => {
  return (
    <>
      <Flex
        justify="center"
        alignItems="flex-end"
        border="1px solid green"
        bg="white"
        h="10vh"
        gap="40"
      >
        <Flex direction={"column"}
        border={"1px solid black"}
        sx={{
          "&::before": {
            content: '""',
            opacity: "0",
          },
          "&:hover::before": {
            opacity: "1",
          },
        }}
        >
            <Box>
          Our Story
            </Box>
        </Flex>

        <Flex direction={"column"}
        border={"1px solid black"}
          sx={{
            "&::before": {
              content: '"check"',
              opacity: "0",
            },
            "&:hover::before": {
              opacity: "1",
            },
          }}
        >Weddings</Flex>

        <NavLink to = "/" >
        <Box>Isha Garden</Box>
        </NavLink>

       <NavLink to = "/gallery" >
       <Flex direction={"column"}
        border={"1px solid black"}
          sx={{
            "&::before": {
              content: '"check"',
              opacity: "0",
              transition : " opacity 0.3s"
            },
            "&:hover::before": {
              opacity: "1",
            },
          }}
        >Gallery</Flex>
       </NavLink>
       

<NavLink to = "/contact">
<Flex direction={"column"}
        border={"1px solid black"}
          sx={{
            "&::before": {
              content: '"check"',
              opacity: "0",
            },
            "&:hover::before": {
              opacity: "1",
            },
          }}
        >Contact</Flex>
</NavLink>
      </Flex>

    </>
  );
};
