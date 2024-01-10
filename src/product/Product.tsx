"use client";
/* -------------------FARE LO STILE,E AL CLICK DI UNA FOTO DEL CAROSELLO VERTICALE SI VEDA L'IMMAGINE NEL CAROSELLO GRANDE--------------------------- */

import { Footer } from "flowbite-react";
import { SitePathComponent } from "../shared/SitePath";
import { useEffect, useState } from "react";
import Header from "../shared/Header";
import { Rating } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { NormalButton } from "../shared/NormalButton";
import { useParams } from "react-router-dom";
import useProductDatabyId from "../dashboard/Product/useProductDatabyId";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  immagini: { img: string }[];
}
export function Product() {
  const id = '1'
  const { productData, setProductData, loading, error, onFetchData} = useProductDatabyId(id);
  console.log(productData)
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
      {productData ? (
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

           {/*  <Swiper
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              className="w-9/12"
            >
              {productData[0].immagini.map((product, index) => (
                <SwiperSlide>
                  <img
                    key={index}
                    src={product.img}
                    alt={`carousel image ${index}`}
                    className="w-full h-full max-h-fit"
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
          {/* dettagli prodotto */}
          <div className="w-full h-full mr-32">
            <h1 className="text-5xl pb-3 font-semibold">{productData[0].name}</h1>
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
            <div className="flex items-center pt-5 pb-8">
              <p className="text-3xl pr-3">{productData[0].price}$</p>
              <p className="text-xl line-through font-thin text-gray-700">
                {productData[0].discount}$
              </p>
            </div>

            <NormalButton
              content="Add to cart"
              customstyle="w-full h-11"
            /*   function={() => addToCart(product)} */
            />
          </div>
        </div>
      ) : (
        <p>...DIO CANE NON VA</p>
      )}

      <Footer />
    </div>
  );
}
