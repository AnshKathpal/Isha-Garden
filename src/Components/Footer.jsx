import React from 'react'
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <>
    
    <Box border="1px solid purple" h="90vh">
        <Box mt = "30" >
        <Text fontSize={"5xl"} >Isha Garden</Text>
        <Text fontSize={"2xl"}>Your Wedding, Our Scenic Venue</Text>
        </Box>
        
        <Grid border={"1px solid red"} w = "40%" m = "auto" mt = "70" gap = "6" gridTemplateColumns={"repeat(3,1fr)"}>
          <GridItem border={"1px solid blue"} h = "200px" ></GridItem>
          <GridItem border={"1px solid blue"} h = "200px" ></GridItem>
          <GridItem border={"1px solid blue"} h = "200px" ></GridItem>
          <GridItem border={"1px solid blue"} h = "200px" ></GridItem>
          <GridItem border={"1px solid blue"} h = "200px" ></GridItem>
          <GridItem border={"1px solid blue"} h = "200px" ></GridItem>
        </Grid>

      </Box>
    
    </>
  )
}
