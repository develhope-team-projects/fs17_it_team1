"use client";
/* -------------------FARE LO STILE,E AL CLICK DI UNA FOTO DEL CAROSELLO VERTICALE SI VEDA L'IMMAGINE NEL CAROSELLO GRANDE--------------------------- */

import { Footer } from "flowbite-react";
import { SitePathComponent } from "../shared/SitePath";
import { useState } from "react";
import Header from "../shared/Header";
import { Rating } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Accordion } from "flowbite-react";
import { NormalButton } from "../shared/NormalButton";


type ProductProps = {
  title: string;
  immagini: { img1: string }[];
  price: number;
  discountPrice?:number;
};

export function Product(props: ProductProps) {
  /*  const [img, setImg] = useState<string | undefined>(undefined);

    const handleClick = (image: string) => {
        setImg(image);
    }; */

  return (
    <div>
      <Header />
      <div className="pt-16">
        <SitePathComponent
          firstTitle="home"
          secondTitle="store"
          thirdTitle="product"
        />
      </div>
      <div className="flex items-center my-10">
        <div className="w-8/12">
          {/* Carosello vertifcali delli immagini */}
          {/* <div>
              {props.immagini.map((product, index)=> (
                <button onClick={() => handleClick(product.img1)} >
                  <img
                    key={index}
                    src={product.img1}
                    alt={`carousel image ${index}`}
                  />
                </button>
              ))}
            </div> */}

          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="w-9/12"
          >
            {props.immagini.map((product, index) => (
              <SwiperSlide>
                <img
                  key={index}
                  src={product.img1}
                  alt={`carousel image ${index}`}
                  className="w-full h-full max-h-fit"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* dettagli prodotto */}
        <div className="w-full h-full mr-32">
          <h1 className="text-5xl pb-3 font-semibold">{props.title}</h1>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          <div className="flex items-center pt-5 pb-8">
            <p className="text-3xl pr-3">{props.price}$</p>
            <p className="text-xl line-through font-thin text-gray-700">
              {props.discountPrice}$
            </p>
          </div>

          <NormalButton content="Add to cart" customstyle="w-full h-11" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
