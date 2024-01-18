"use client";
/* -------------------FARE LO STILE,E AL CLICK DI UNA FOTO DEL CAROSELLO VERTICALE SI VEDA L'IMMAGINE NEL CAROSELLO GRANDE--------------------------- */

import { Accordion } from "flowbite-react";
import { SitePathComponent } from "../../shared/SitePath";
import { Rating } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { NormalButton } from "../../shared/NormalButton";
import { useParams } from "react-router-dom";
import useProductDatabyId from "../../dashboard/Product/useProductDatabyId";
import RatingReview from "./RatingReview";
import CarrouselProducts from "./CarrouselProducts";
import useReviewbyId from "../../dashboard/Product/useReviewbyId";
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

  const { productData, loading, error } =
    useProductDatabyId(productId);

  const {
    reviewData,
    loadingReview,
    errorReview,
  } = useReviewbyId(productId);


  /* console.log(loading);
  console.log(error);
  console.log(productData);
  console.log(productId); */

  console.log("Review Data:", reviewData);
  console.log("ProductData:", productData[0])
  const filteredReviews = reviewData
    ? reviewData.filter(review => review.product_id == productData[0].id)
    : [];
  console.log("filtered", filteredReviews)


  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full h-[3.75rem] bg-our-black/95"></div>
      <div
        className=" container
       mx-4
       max-w-7xl"
      >
        <div className="w-full py-4">
          <SitePathComponent
            firstTitle="Homepage"
            secondTitle="Store"
            thirdTitle={productData[0] && productData[0].name}
          />
        </div>
        {loading && (
          <div className="flex items-center justify-center flex-col">
            <img src="	https://media.tenor.com/vfSWqzGjMdcAAAAi/grants-triple-good.gif" className="h-96" />
            <p className="text-4xl p-4">Loading...</p>
          </div>
        )}
        {error && <p>...Error</p>}

        {productData[0] && (
          <div>
            <div className="flex flex-col md:flex-row w-full items-center">
              <div className="w-8/12 mx-5">
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
                <img src={`/src/Images/${productData[0].id}.jpg`} alt="" className="w-full rounded-lg" />
              </div>
              {/* dettagli prodotto */}
              <div className="flex items-center flex-col w-full h-full mt-10 md:pl-10 md:items-start">
                <div>
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
                </div>
                <div>
                <NormalButton
                  content="Add to cart"
                  customstyle="w-full h-11"
                /*   function={() => addToCart(product)} */
                />
                </div>
              </div>

            </div>
            <div className="pt-16">
              <Accordion className="dark:border-[#c8a485]/60 dark:divide-[#c8a485]/60">
                <Accordion.Panel>
                  <Accordion.Title className="dark:hover:bg-[#c8a485]/60 dark:hover:text-our-black focus:ring-2 dark:bg-[#c8a485]/30 dark:text-our-black">
                    <div className="flex items-center">
                      <img src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="ship" className="h-7 pr-3"/>
                      <p>Spedizioni e resi</p>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content className="dark:bg-[#e3ddcd]/40">
                    <p className="mb-2 text-gray-500 dark:text-our-black">
                      Puoi restituire il tuo ordine gratuitamente entro 48 ore
                      dall'arrivo del prodotto.
                    </p>


                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="dark:hover:bg-[#c8a485]/60 dark:hover:text-our-black focus:ring-2 dark:bg-[#c8a485]/30 dark:text-our-black" >
                    <div className="flex items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/2191/2191108.png" alt="reviews" className="h-7 pr-3"/>
                      <p>Recensioni</p>
                    </div>
                    
                    </Accordion.Title>
                  <Accordion.Content className="dark:bg-[#e3ddcd]/40">
                    {loadingReview && (
                      <div className="flex items-center justify-center flex-col">
                        <img src="	https://media.tenor.com/vfSWqzGjMdcAAAAi/grants-triple-good.gif" />
                        <p className="text-4xl p-4">Loading...</p>
                      </div>
                    )}
                    {errorReview && <p>...Error</p>}¯
                    {filteredReviews.map((review, index) => (
                      <div key={index} className="pb-10">
                        <RatingReview
                          title={review.title}
                          comment={review.comment}
                          creation_date={review.creation_date}
                          user_id={review.user_id}
                        />
                      </div>
                    ))}


                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <div className="h-1/4"><CarrouselProducts /></div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
