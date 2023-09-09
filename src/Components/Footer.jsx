import React from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <>
      <Box border="1px solid purple" h="90vh">
        <Box mt="30">
          <Text fontSize={"5xl"}>Isha Garden</Text>
          <Text fontSize={"2xl"}>Your Wedding, Our Scenic Venue</Text>
        </Box>

        <Flex  justify="center" align={"center"}>
          <Flex gap = "10" direction={"column"}  m="auto" w = "20%">
            <Text fontSize={"2xl"} >Let's Get In Touch</Text>
            <hr />
            <Flex direction={"column"} >
            <Text>anshkathpal17@gmail.com</Text>
            <Text>8448837130</Text>
            </Flex>
            
          </Flex>
          <Grid
            w="40%"
            m="auto"
            mt="70"
            gap="6"
            gridTemplateColumns={"repeat(3,1fr)"}
          >
            <GridItem h="200px">
              <img
                style={{ objectFit: "cover", height: "100%" }}
                src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </GridItem>
            <GridItem h="200px">
              <img
                style={{ objectFit: "cover", height: "100%" }}
                src="https://images.pexels.com/photos/17315417/pexels-photo-17315417/free-photo-of-a-wedding-venue-decorated-with-white-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </GridItem>
            <GridItem h="200px">
              <img
                style={{ objectFit: "cover", height: "100%" }}
                src="https://images.pexels.com/photos/940831/pexels-photo-940831.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </GridItem>
            <GridItem h="200px">
              <img
                style={{ objectFit: "cover", height: "100%" }}
                src="https://images.pexels.com/photos/8887264/pexels-photo-8887264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </GridItem>
            <GridItem h="200px">
              <img
                style={{ objectFit: "cover", height: "100%" }}
                src="https://images.pexels.com/photos/15964966/pexels-photo-15964966/free-photo-of-wedding-guests-holding-sparklers-and-standing-around-the-newlyweds-dancing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </GridItem>
            <GridItem h="200px">
              <img
                style={{ objectFit: "cover", height: "100%" }}
                src="https://images.pexels.com/photos/15964946/pexels-photo-15964946/free-photo-of-a-wedding-venue-with-guests-inside-photographed-from-the-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </GridItem>
          </Grid>
          <Flex gap = "10" direction={"column"} m="auto" w = "20%">
            <Text fontSize={"2xl"} >Share & Connect</Text>
            <hr />
            <Flex direction={"column"} >
            <Text>Facebook</Text>
            <Text>Instagram</Text>
            </Flex>
            
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
