"use client";
/* -------------------FARE LO STILE,E AL CLICK DI UNA FOTO DEL CAROSELLO VERTICALE SI VEDA L'IMMAGINE NEL CAROSELLO GRANDE--------------------------- */

import { Accordion, Footer, Spinner } from "flowbite-react";
import { SitePathComponent } from "../../shared/SitePath";
import { useEffect, useState } from "react";
import Header from "../../shared/Header";
import { Rating } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { NormalButton } from "../../shared/NormalButton";
import { useParams } from "react-router-dom";
import useProductDatabyId from "../../dashboard/Product/useProductDatabyId";
import CardStd from "./CardStd";
import RatingReview from "./RatingReview";
import CarrouselProducts from "./CarrouselProducts";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  immagini: { img: string }[];
}
export function Product() {
  const { id } = useParams();
  const productId: number = Number(id);
  const { productData, setProductData, loading, error, onFetchData } =
    useProductDatabyId(productId);
  console.log(loading);
  console.log(error);
  console.log(productData);
  console.log(productId);

  return (
    <div className="flex flex-col w-full items-center">
      <div
        className=" container
       mx-4
       max-w-7xl"
      >
        <div className="w-full pt-16">
          <SitePathComponent
            firstTitle="home"
            secondTitle="store"
            thirdTitle="product"
          />
        </div>
        {loading && (
          <div className="flex items-center justify-center flex-col">
            <img src="	https://media.tenor.com/vfSWqzGjMdcAAAAi/grants-triple-good.gif" />
            <p className="text-4xl p-4">Loading...</p>
          </div>
        )}
        {error && <p>...Error</p>}

        {productData[0] && (
          <div>
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
                <h1 className="text-5xl pb-3 font-semibold">
                  {productData[0].name}
                </h1>
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
                {productData[0].description && (
                  <p className="pt-4 text-l">{productData[0].description}</p>
                )}
                <div className="flex items-center pt-5 pb-8">
                  {productData[0].discount === null ||
                  productData[0].discount === 0 ? (
                    <p className="text-3xl pr-3">
                      {(
                        productData[0].price -
                        productData[0].price * productData[0].discount
                      ).toFixed(2)}
                      $
                    </p>
                  ) : (
                    <>
                      <p className="text-3xl pr-3">
                        {(
                          productData[0].price -
                          productData[0].price * productData[0].discount
                        ).toFixed(2)}
                        $
                      </p>
                      <p className="text-xl line-through font-thin text-gray-700">
                        {productData[0].price}$
                      </p>
                    </>
                  )}
                </div>

                <NormalButton
                  content="Add to cart"
                  customstyle="w-full h-11"
                  /*   function={() => addToCart(product)} */
                />
              </div>
            </div>
            <div className="pt-16">
              <Accordion collapseAll>
                <Accordion.Panel>
                  <Accordion.Title>Spedizioni e resi</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Consegna standard gratuita con la tua Membership Nike.
                      Puoi restituire il tuo ordine gratuitamente entro 24 ore
                      dall'arrivo del prodotto.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>Recensioni</Accordion.Title>
                  <Accordion.Content>
                    <div className="pb-10">
                      <RatingReview
                        img="https://cdn-7.motorsport.com/images/amp0ZRabeN0s1000carlos-sainz-ferrari-charles-l.jpg"
                        name="Eno Mario"
                        userCountry="Italy"
                        rating={3}
                        ratingTitle="buono"
                        commentDate="01-01-2023"
                        comment="Buon Prodotto"
                      />
                    </div>
                    <div className="pb-10">
                      <RatingReview
                        img="https://cdn-7.motorsport.com/images/amp0ZRabeN0s1000carlos-sainz-ferrari-charles-l.jpg"
                        name="Eno Mario"
                        userCountry="Italy"
                        rating={3}
                        ratingTitle="buono"
                        commentDate="01-01-2023"
                        comment="Buon Prodotto"
                      />
                    </div>
                    <div className="pb-10">
                      <RatingReview
                        img="https://cdn-7.motorsport.com/images/amp0ZRabeN0s1000carlos-sainz-ferrari-charles-l.jpg"
                        name="Eno Mario"
                        userCountry="Italy"
                        rating={3}
                        ratingTitle="buono"
                        commentDate="01-01-2023"
                        comment="Buon Prodotto"
                      />
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <CarrouselProducts />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
