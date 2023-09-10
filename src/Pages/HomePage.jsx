import React from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import headerImage from "../Images/image-header.jpg";
import coupleImage from "../Images/couple.jpg";
import { HeaderImage } from "../Components/HeaderImage";

export const HomePage = () => {
  return (
    <div>
      <HeaderImage
        src={headerImage}
        text={"Your Wedding, Your Way, Our Venue"}
      />

      <Flex
        width="97%"
        margin={"auto"}
        h="80vh"
        bgImage={headerImage}
        justify={"center"}
        align="center"
        mb="10"
      >
        <Box p="6" w="70%" bg="white">
          <Text mb = "5">Welcome To</Text>
          <Text fontSize={"4xl"} fontWeight = "bold" fontFamily = "'Great Vibes', cursive">Isha Garden</Text>
          <Flex mt = "5" mb = "5" justify={"space-around"} >
            <Text  color = "#faa592" fontSize={"2xl"} fontWeight = "bold"  fontFamily = "'Great Vibes', cursive" >Enchanting Garden Oasis</Text>
            <Text  color = "#faa592" fontSize={"2xl"}  fontWeight = "bold"   fontFamily = "'Great Vibes', cursive">Nature's Perfect Wedding Setting</Text>
            <Text  color = "#faa592" fontSize={"2xl"}  fontWeight = "bold"   fontFamily = "'Great Vibes', cursive">Serene Outdoor Elegance</Text>
          </Flex>
          <Text align={"center"}  fontFamily = "'Great Vibes', cursive"  fontSize={"2xl"}>
            The Venue is an inviting and serene location for weddings,
            receptions, and other special occasions. Located in a picturesque
            setting, this charming venue offers a tranquil escape for those
            seeking a romantic and memorable experience.
          </Text>
          <Text  align={"center"}  fontFamily = "'Great Vibes', cursive" fontSize={"2xl"}>
            Originally designed with weddings in mind, the venue has blossomed
            into a versatile and award-winning destination for a wide range of
            events. The Event Space is adaptable, making it equally suitable for
            hosting elegant weddings as it is for hosting intimate garden
            ceremonies and outdoor celebrations.
          </Text>
          <Text   align={"center"} fontFamily = "'Great Vibes', cursive" fontSize={"2xl"}>
            As the sun sets behind the picturesque landscape, you'll come to
            understand why the Venue is more than just a place to
            host events; it's a captivating and enchanting Gathering Place for
            love and celebration.
          </Text>
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
        // mb="10"
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
