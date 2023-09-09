import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Option,
  Box,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { HeaderImage } from "../Components/HeaderImage";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const toast = useToast();

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i70xww1",
        "template_piiki1t",
        form.current,
        "dfde4HYnaNLGhS5H4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    toast({
      title: "Thanks, Enquiry Submitted",
      description: "We'll get back to you shortly",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <HeaderImage src="https://images.pexels.com/photos/1545749/pexels-photo-1545749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

      <Flex>
        <Flex
          padding="30px"
          alignItems="center"
          width={{ base: "100%", lg: "50%" }}
          justifyContent="center"
          direction={"column"}
        >
          <Text mb="30px" fontSize="3xl">
            Tell us about your Dream Day and let us make it reality!
          </Text>

          <form ref={form} onSubmit={handleSubmit}>
            <FormControl display="flex" flexDirection={"column"} gap="10px">
              <Box>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="user_name" required></Input>
              </Box>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="user_email" required></Input>
              </Box>
              <Box>
                <FormLabel>Phone</FormLabel>
                <Input type="number" name="user_phone" required></Input>
              </Box>
              <Box>
                <FormLabel>What Kind of Event you're interested in!</FormLabel>
                <Select name="user_event">
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday Party">Birthday Party</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Event Date</FormLabel>
                <Input type="date" name="user_date" required></Input>
              </Box>
              <Box>
                <FormLabel>Estimated Guest Count</FormLabel>
                <Input type="number" name="user_guests" required></Input>
              </Box>
              <Box>
                <FormLabel>Message</FormLabel>
                <Textarea type="text" name="user_message" required></Textarea>
              </Box>

              <Button
                _hover={{ bg: "black" }}
                h="40px"
                color="white"
                bg="black"
                variant="outline"
                type="submit"
                className="--btn --btn-primary"
                mt={5}
              >
                Send Enquiry
              </Button>
            </FormControl>
          </form>
        </Flex>
        <Flex width="50%" justifyContent={"center"} alignItems="center">
          <Box width="50%" h="70%" border="1px solid pink" bg = "rgb(254,186,171)">
            <img
              style={{ height: "100%", rotate: "10deg" }}
              src="https://images.pexels.com/photos/1587042/pexels-photo-1587042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
