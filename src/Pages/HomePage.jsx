import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";

export const HomePage = () => {
  return (
    <div>
      <Box border="1px solid red" h="85vh" bg="pink"></Box>
      <div style={{position : "sticky" , top : 0, zIndex : "100" }} >
        <Navbar />
      </div>

      <Box border="1px solid red" h="85vh" bg="blue"></Box>
      <Box border="1px solid red" bg="green" h="85vh"></Box>
    </div>
  );
};
