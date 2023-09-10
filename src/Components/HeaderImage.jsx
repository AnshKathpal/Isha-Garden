import React from 'react'
import {Box} from "@chakra-ui/react"
import { Navbar } from './Navbar'
import { Text } from '@chakra-ui/react'

export const HeaderImage = ({src,text}) => {
  return (
    <>

    <Box h="85vh">
        <img
          src={src}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "brightness(60%)",
          }}
          alt=""
        />

<Text fontSize={"3xl"} pos = "absolute">{text}</Text>
        
      </Box>

      

      <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
        <Navbar />
      </div>


    </>
  )
}
