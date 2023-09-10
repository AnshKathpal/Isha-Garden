import React from "react";
import { Box, Flex, Text, Grid, GridItem, Button } from "@chakra-ui/react";
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
        bgImage="url(https://images.pexels.com/photos/6387657/pexels-photo-6387657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
        justify={"center"}
        align="center"
        mb="10"
      >
        <Box
          shadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
          p="6"
          w="70%"
          bg="white"
        >
          <Text mb="5">Welcome To</Text>
          <Text
            fontSize={"4xl"}
            fontWeight="bold"
            fontFamily="'Great Vibes', cursive"
          >
            Isha Garden
          </Text>
          <Flex mt="5" mb="5" justify={"space-around"}>
            <Text
              color="#faa592"
              fontSize={"2xl"}
              fontWeight="bold"
              fontFamily="'Great Vibes', cursive"
            >
              Enchanting Garden Oasis
            </Text>
            <Text
              color="#faa592"
              fontSize={"2xl"}
              fontWeight="bold"
              fontFamily="'Great Vibes', cursive"
            >
              Nature's Perfect Wedding Setting
            </Text>
            <Text
              color="#faa592"
              fontSize={"3xl"}
              fontWeight="bold"
              fontFamily="'Great Vibes', cursive"
            >
              Serene Outdoor Elegance
            </Text>
          </Flex>
          <Text
            align={"center"}
            // fontFamily="'Great Vibes', cursive"
            // fontFamily={"'Yellowtail', cursive"}
            fontFamily="'Gloria Hallelujah', cursive;"
            fontSize={"xl"}
          >
            The Venue is an inviting and serene location for weddings,
            receptions, and other special occasions. Located in a picturesque
            setting, this charming venue offers a tranquil escape for those
            seeking a romantic and memorable experience.
          </Text>
          <Text
            align={"center"}
            fontFamily="'Gloria Hallelujah', cursive;"
            fontSize={"xl"}
          >
            Originally designed with weddings in mind, the venue has blossomed
            into a versatile and award-winning destination for a wide range of
            events. The Event Space is adaptable, making it equally suitable for
            hosting elegant weddings as it is for hosting intimate garden
            ceremonies and outdoor celebrations.
          </Text>
          <Text
            align={"center"}
            fontFamily="'Gloria Hallelujah', cursive;"
            fontSize={"xl"}
          >
            As the sun sets behind the picturesque landscape, you'll come to
            understand why the Venue is more than just a place to host events;
            it's a captivating and enchanting Gathering Place for love and
            celebration.
          </Text>
        </Box>
      </Flex>
      <Flex width="97%" margin={"auto"} h="90vh">
        <Box width="50%" overflow={"hidden"}>
          <img
            src="https://images.pexels.com/photos/12668995/pexels-photo-12668995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </Box>

        <Flex
          direction={"column"}
          width="50%"
          justify={"center"}
          align="center"
          p="10"
        >
          <Text fontSize={"2xl"} fontFamily="'Gloria Hallelujah', cursive;">
            STUNNING ASHEVILLE WEDDING VENUE
          </Text>
          <Text
            color="#faa592"
            fontFamily="'Great Vibes', cursive"
            fontSize={"6xl"}
          >
            Weddings
          </Text>
          <Text
            mb="5"
            fontSize={"xl"}
            fontFamily="'Gloria Hallelujah', cursive;"
          >
            There is no such thing as a “standard wedding” here at The Farm;
            each couple has their personality and their weddings reflect that
            perfectly. Our licensed Wedding Coordinators and a stable of trusted
            local vendors will help you bring your vision to life.
          </Text>
          <Text
            mb="10"
            fontSize={"xl"}
            fontFamily="'Gloria Hallelujah', cursive"
          >
            Our facilities are versatile and accommodating, designed to
            encompass the change of seasons ensuring stunning weddings that
            embrace the picturesque Blue Ridge mountains. The beautifully
            manicured property offers an Indoor/Outdoor Event Center with a
            wrap-around porch, a romantic gazebo and unique Chef’s Table perfect
            for rehearsal dinners and wedding brunches.
          </Text>
          <Button
            pos={"relative"}
            border="none"
            _hover={{
              backgroundColor: "white",
            }}
            bg="white"
            fontFamily="'Great Vibes', cursive"
            fontSize={"2xl"}
            color="#faa592"
            sx={{
              "&::before": {
                position: "absolute",
                content: "''",
                border: "1px solid transparent",
                height: "0",
                width: "0",
                bottom: "0",
                left: "0",
              },

              "&::after": {
                position: "absolute",
                content: "''",
                border: "1px solid transparent",
                height: "0",
                width: "0",
                top: "0",
                right: "0",
              },

              "&:hover:before": {
                border: "1px solid #faa592",
                transition: "height 0.2s linear, width 0.2s linear 0.2s",
                borderRight: "none",
                borderBottom: "none",
                width: "100%",
                height: "100%",
              },

              "&:hover:after": {
                border: "1px solid #faa592",
                transition: "height 0.2s linear, width 0.2s linear 0.2s",
                borderLeft: "none",
                borderTop: "none",
                width: "100%",
                height: "100%",
              },
            }}
          >
            Learn More
          </Button>
        </Flex>
      </Flex>

      <Grid width="97%" margin={"auto"} gridTemplateColumns="repeat(2,1fr)">
        {/* <GridItem  h="50vh"  p = "10" > */}
        <Flex
          h="50vh"
          p="10"
          direction={"column"}
          justify="center"
          align="center"
        >
          <Text fontSize={"2xl"} fontFamily="'Gloria Hallelujah', cursive;">
            CORPORATE EVENTS, REUNIONS & GETAWAYS
          </Text>
          <Text
            color="#faa592"
            fontFamily="'Great Vibes', cursive"
            fontSize={"6xl"}
          >
            Gather at Our Venue
          </Text>
          <Text
            mb="5"
            fontSize={"xl"}
            fontFamily="'Gloria Hallelujah', cursive;"
          >
            The Venue is a top destination spot for weddings, reunions,
            team-building and getaway vacations. It is easy to get to, but feels
            far away – like your own private retreat. The Venue’s meticulously
            maintained property, unparalleled service, innovative menus,
            comfortable lodging and attention to detail will ensure your event
            is memorable.
          </Text>
          <Button
            pos={"relative"}
            border="none"
            _hover={{
              backgroundColor: "white",
            }}
            bg="white"
            fontFamily="'Great Vibes', cursive"
            fontSize={"2xl"}
            color="#faa592"
            sx={{
              "&::before": {
                position: "absolute",
                content: "''",
                border: "1px solid transparent",
                height: "0",
                width: "0",
                bottom: "0",
                left: "0",
              },

              "&::after": {
                position: "absolute",
                content: "''",
                border: "1px solid transparent",
                height: "0",
                width: "0",
                top: "0",
                right: "0",
              },

              "&:hover:before": {
                border: "1px solid #faa592",
                transition: "height 0.2s linear, width 0.2s linear 0.2s",
                borderRight: "none",
                borderBottom: "none",
                width: "100%",
                height: "100%",
              },

              "&:hover:after": {
                border: "1px solid #faa592",
                transition: "height 0.2s linear, width 0.2s linear 0.2s",
                borderLeft: "none",
                borderTop: "none",
                width: "100%",
                height: "100%",
              },
            }}
          >
            Learn More
          </Button>
        </Flex>
        {/* </GridItem> */}
        <GridItem h="50vh">
          <img
            src="https://images.pexels.com/photos/10360901/pexels-photo-10360901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
        <Flex
          h="50vh"
          p="10"
          direction={"column"}
          justify="center"
          align="center"
        >
          <Text fontSize={"2xl"} fontFamily="'Gloria Hallelujah', cursive;">
            CUSTOM MENUS, PRIVATE EVENTS & CLASSES
          </Text>
          <Text
            color="#faa592"
            fontFamily="'Great Vibes', cursive"
            fontSize={"6xl"}
          >
            Eat in The Kitchen
          </Text>
          <Text
            mb="5"
            fontSize={"xl"}
            fontFamily="'Gloria Hallelujah', cursive;"
          >
            The Venue's Kitchen’s kitchen-to-table philosophy sets our venue
            apart. Chef artisanal catering sets the bar for banquet and
            reception cuisine. Mike crafts custom menus featuring innovative
            dishes inspired by the freshest ingredients available each season.
            Whether a family-style meal for 250 or a corporate dinner for 20, we
            are confident your guests will find the meal unforgettable.
          </Text>
          <Button
            pos={"relative"}
            border="none"
            _hover={{
              backgroundColor: "white",
            }}
            bg="white"
            fontFamily="'Great Vibes', cursive"
            fontSize={"2xl"}
            color="#faa592"
            sx={{
              "&::before": {
                position: "absolute",
                content: "''",
                border: "1px solid transparent",
                height: "0",
                width: "0",
                bottom: "0",
                left: "0",
              },

              "&::after": {
                position: "absolute",
                content: "''",
                border: "1px solid transparent",
                height: "0",
                width: "0",
                top: "0",
                right: "0",
              },

              "&:hover:before": {
                border: "1px solid #faa592",
                transition: "height 0.2s linear, width 0.2s linear 0.2s",
                borderRight: "none",
                borderBottom: "none",
                width: "100%",
                height: "100%",
              },

              "&:hover:after": {
                border: "1px solid #faa592",
                transition: "height 0.2s linear, width 0.2s linear 0.2s",
                borderLeft: "none",
                borderTop: "none",
                width: "100%",
                height: "100%",
              },
            }}
          >
            Learn More
          </Button>
        </Flex>
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
