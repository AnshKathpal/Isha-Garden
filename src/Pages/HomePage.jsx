import React from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import headerImage from "../Images/image-header.jpg";
import coupleImage from "../Images/couple.jpg";

export const HomePage = () => {
  return (
    <div>
      <Box h="90vh">
        <img
          src={headerImage}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "brightness(60%)",
          }}
          alt=""
        />
      </Box>
      <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
        <Navbar />
      </div>

      <Flex
        width="97%"
        margin={"auto"}
        h="80vh"
        bgImage={headerImage}
        justify={"center"}
        align="center"
      >
        <Box w="70%" h="50%" bg="white">
          <Text></Text>
        </Box>
      </Flex>
      <Flex width="97%" margin={"auto"} h="90vh">
        <Box width="50%" border="1px solid red" overflow={"hidden"}>
          <img src={coupleImage} alt="" />
        </Box>

        <Box width="50%" border="1px solid red"></Box>
      </Flex>

      <Grid width="97%" margin={"auto"} gridTemplateColumns="repeat(2,1fr)">
        <GridItem h="50vh" border="1px solid blue"></GridItem>
        <GridItem h="50vh" border="1px solid blue">
          <img
            src="https://images.pexels.com/photos/10172663/pexels-photo-10172663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </GridItem>
        <GridItem h="50vh" border="1px solid pink" overflow={"hidden"}>
          <img src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </GridItem>
        <GridItem h="50vh" border="1px solid pink"></GridItem>
        <GridItem h="50vh" border="1px solid green"></GridItem>
        <GridItem h="50vh" border="1px solid green"></GridItem>
      </Grid>
    </div>
  );
};
