import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import logo from "../Images/logo2.jpg";
import { NavLink } from "react-router-dom";

import { VscHeart } from "react-icons/vsc";

export const Navbar = () => {
  return (
    <>
      <Flex
        justify="center"
        alignItems="center"
        shadow="rgba(254, 186, 171, 0.2) 0px 2px 8px 0px;"
        bg="white"
        h="15vh"
        gap="40"
      >
        <Flex direction={"column"}
        color = "#faa592"
        fontFamily="'Permanent Marker', cursive"
        fontSize={"2xl"}
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
          Our Story
        </Flex>

        <Flex direction={"column"}
        fontFamily="'Permanent Marker', cursive"
          sx={{
            "&::before": {
              content: '""',
              opacity: "0",
            },
            "&:hover::before": {
              opacity: "1",
            },
          }}
          color = "#faa592"
          fontSize={"2xl"}
        >Weddings</Flex>

        <NavLink to = "/" >
          <img src={logo} style = {{width : "400px"}} alt="" />
        </NavLink>

       <NavLink to = "/gallery" >
       <Flex direction={"column"}
       fontFamily="'Permanent Marker', cursive"
        color = "#faa592"
          sx={{
            "&::before": {
              content: '""',
              opacity: "0",
              transition : " opacity 0.3s"
            },
            "&:hover::before": {
              opacity: "1",
            },
          }}
          fontSize={"2xl"}
        >Gallery</Flex>
       </NavLink>
       

<NavLink to = "/contact">
<Flex fontFamily="'Permanent Marker', cursive" direction={"column"}
        color = "#faa592"
        fontSize={"2xl"}
          sx={{
            "&::before": {
              content: '""',
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
