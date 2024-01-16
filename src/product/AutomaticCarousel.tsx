"use client";

import { Carousel } from "flowbite-react";

export type CarouselContent = {
  image: string;
};

type AutomaticCarouselProps = {
  images: CarouselContent[];
};

export function AutomaticCarousel({ images }: AutomaticCarouselProps) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((image, index) => (
          <img key={index} src={image.image} alt={`carousel image ${index}`} />
        ))}
      </Carousel>
    </div>
  );
}
