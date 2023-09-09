import React from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import headerImage from "../Images/image-header.jpg";
import coupleImage from "../Images/couple.jpg";
import { HeaderImage } from "../Components/HeaderImage";

export const HomePage = () => {
  return (
    <div>
      <HeaderImage src={headerImage} />

      <Flex
        width="97%"
        margin={"auto"}
        h="80vh"
        bgImage={headerImage}
        justify={"center"}
        align="center"
        mb = "10"
      >
        <Box w="70%" h="50%" bg="white">
          <Text></Text>
        </Box>
      </Flex>
      <Flex width="97%" margin={"auto"} h="90vh">
        <Box width="50%" overflow={"hidden"}>
          <img src={coupleImage} alt="" />
        </Box>

        <Box width="50%"></Box>
      </Flex>

      <Grid width="97%" margin={"auto"} gridTemplateColumns="repeat(2,1fr)">
        <GridItem h="50vh"></GridItem>
        <GridItem h="50vh">
          <img
            src="https://images.pexels.com/photos/10172663/pexels-photo-10172663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </GridItem>
        <GridItem h="50vh" overflow={"hidden"}>
          <img
            src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </GridItem>
        <GridItem h="50vh"></GridItem>
      </Grid>

      <Grid
        width="97%"
        margin={"auto"}
        justifyContent="center"
        gap="70"
        mt="10"
        mb="10"
        gridTemplateColumns="repeat(3,1fr)"
        pl="20"
        pr="20"
      >
        <GridItem h="600px">
          <img
            src="https://images.pexels.com/photos/673659/pexels-photo-673659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </GridItem>
        <GridItem h="600px" bg="rgb(254,186,171)"></GridItem>
        <GridItem h="600px" overflow={"hidden"}>
          <img
            src="https://images.pexels.com/photos/18183697/pexels-photo-18183697/free-photo-of-smiling-newlyweds-on-wedding-ceremony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </GridItem>
      </Grid>
    </div>
  );
};
