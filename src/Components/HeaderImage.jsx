import React from 'react'
import {Box} from "@chakra-ui/react"
import { Navbar } from './Navbar'

export const HeaderImage = ({src}) => {
  return (
    <>

    <Box h="90vh">
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
      </Box>

      <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
        <Navbar />
      </div>


    </>
  )
}
