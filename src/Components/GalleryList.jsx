import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const GalleryList = () => {
  return (
    <>
      <Box mb="30" mt="30">
        <Flex gap="30" width="97%" m="auto" border={"1px solid blue"}>
          <Box border="1px solid green" h="100vh" w="60%">
          <img style={{objectFit : "cover", height : "100%"}}  src="https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" alt="" />
          </Box>
          <Grid gap="30" h="100vh" border="1px solid green" w="40%">
            <GridItem border="1px solid red">
              
            </GridItem>
            <GridItem border="1px solid red"></GridItem>
          </Grid>
        </Flex>
      </Box>

      <Box mb="30">
        <Flex gap="30" width="97%" m="auto" border={"1px solid blue"}>
          <Grid gap="30" h="100vh" border="1px solid green" w="40%">
            <GridItem border="1px solid red"></GridItem>
            <GridItem border="1px solid red"></GridItem>
          </Grid>

          <Box border="1px solid green" h="100vh" w="60%"></Box>
        </Flex>
      </Box>

      <Box mb="30">
        <Flex gap="30" width="97%" m="auto" border={"1px solid blue"}>
          <Box border="1px solid green" h="100vh" w="60%"></Box>
          <Grid gap="30" h="100vh" border="1px solid green" w="40%">
            <GridItem border="1px solid red"></GridItem>
            <GridItem border="1px solid red"></GridItem>
          </Grid>
        </Flex>
      </Box>
    </>
  );
};
