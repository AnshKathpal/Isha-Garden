import React from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import logo from "../Images/logo2.jpg";
export const Footer = () => {
  return (
    <>
      <Box h="85vh">
        <Box>
          <Text
            fontSize={"5xl"}
            fontFamily="'Permanent Marker', cursive"
            color="#faa592"
          >
            Isha Garden
          </Text>
          <Text fontSize={"2xl"} fontFamily="'Great Vibes', cursive">
            Your Wedding, Our Scenic Venue
          </Text>
        </Box>

        <Flex justify="center" align={"center"}>
          <Flex gap="10" direction={"column"} m="auto" w="20%">
            <Text
              fontSize={"2xl"}
              fontFamily="'Permanent Marker', cursive"
              color="#faa592"
            >
              Let's Get In Touch
            </Text>
            <hr />
            <Flex direction={"column"}>
              <Text color="#faa592">gauravvijayran17@gmail.com</Text>
              <Text color="#faa592">8448837130</Text>
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
          <Flex gap="10" direction={"column"} m="auto" w="20%">
            <Text
              fontSize={"2xl"}
              fontFamily="'Permanent Marker', cursive"
              color="#faa592"
            >
              Share and Connect
            </Text>
            <hr />
            <Flex direction={"column"}>
              <Text color="#faa592">Facebook</Text>
              <Text color="#faa592">Instagram</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex gap="3" mt={"10"} direction={"column"}>
          <Text fontSize={"2xl"}>
            Isha Garden, Block G, Meer Vihar, Mubarakpur Dabas, Delhi, 110081
          </Text>
          <Text fontSize={"xl"}>By Gaurav Vijayran</Text>
        </Flex>
      </Box>
    </>
  );
};
