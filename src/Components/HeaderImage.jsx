import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Text,Flex } from "@chakra-ui/react";
import styled, {keyframes} from "styled-components"


export const HeaderImage = ({ src, text }) => {
  return (
    <>
      <Box pos={"relative"} h="85vh">
        <img
          src={src}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "brightness(50%)",
          }}
          alt=""
        />

        <AnimatedText
        w = "70%"
          color={"white"}
          pos={"absolute"}
          zIndex="1"
          fontSize={"6xl"}
          fontFamily = "'Great Vibes', cursive"
          fontWeight={"bold"}
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          direction  = "column"
        >
          {text}
        </AnimatedText>
      </Box>

      <div style={{ position: "sticky", top: 0 }}>
        <Navbar />
      </div>
    </>
  );
};


const animatedText = keyframes`

0% {
  opacity : 0;
}

50%{
  opacity : 0.5;
}

100% {
  opacity : 1;
}

`


const AnimatedText = styled(Flex)`

animation : ${animatedText} 2s ease-in-out;
position : relative;

&::after {

  content : url("https://starpng.com/public/uploads/preview/download-leaf-divider-png-image-115769370303lpoccbgyj.png");
  filter : brightness(0) invert(1);

}

`