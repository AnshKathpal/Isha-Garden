import React from "react";
import { GalleryList } from "../Components/GalleryList";
import { HeaderImage } from "../Components/HeaderImage";

export const Gallery = () => {
  return (
    <>
      <HeaderImage src="https://images.pexels.com/photos/1878124/pexels-photo-1878124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

      <GalleryList />
    </>
  );
};
