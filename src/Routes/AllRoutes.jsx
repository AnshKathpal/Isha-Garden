import {Routes,Route} from "react-router-dom"


import React from 'react'
import { HomePage } from "../Pages/HomePage"
import { Gallery } from "../Pages/Gallery"
import { Contact } from "../Pages/Contact"

export const AllRoutes = () => {
  return (

    <Routes>

<Route path = "/" element = {<HomePage />} />
<Route path = "/gallery" element = {<Gallery />} />
<Route path = "/contact" element = {<Contact />} />

    </Routes>
  )
}
