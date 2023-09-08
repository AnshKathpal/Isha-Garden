import {Routes,Route} from "react-router-dom"


import React from 'react'
import { HomePage } from "../Pages/HomePage"

export const AllRoutes = () => {
  return (

    <Routes>

<Route path = "/" element = {<HomePage />} />

    </Routes>
  )
}
