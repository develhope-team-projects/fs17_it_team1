"use client";

import { Carousel } from "flowbite-react";
export type CarouselContent = {
  Image1: string;
  Image2: string;
  Image3: string;
  Image4: string;
  Image5: string;
};
export function AutomaticCarousel(props: CarouselContent) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={props.Image1} alt="..." />
        <img src={props.Image2} alt="..." />
        <img src={props.Image3} alt="..." />
        <img src={props.Image4} alt="..." />
        <img src={props.Image5} alt="..." />
      </Carousel>
    </div>
  );
}
