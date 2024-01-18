//-----------------------------!!!!!!!DA FINIRE--------------------------
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import CardStd from "./CardStd";
import useProductData from "../../dashboard/Product/useProductData";
import { useState } from "react";

export default function CarrouselProducts() {
  const swiper = useSwiper();
  const med = window.matchMedia("(min-width: 800px)");
  const medM = window.matchMedia("(min-width: 450px)");
  const [mediaTab, setMedia] = useState(med.matches);
  const [mediaMob, setMediaMob] = useState(medM.matches);

  med.addEventListener("change", () => {
    setMedia(med.matches);
  });

  medM.addEventListener("change", () => {
    setMediaMob(medM.matches);
  });

  const { productData, loading, error } = useProductData();
  return (
    <div className="py-20 h-2/6">
      <h2 className="flex items-center text-5xl font-bold dark:text-our-black my-1 mx-2 pb-5">
        Best sellers
      </h2>
      <hr />
      <Swiper
        spaceBetween={30}
        slidesPerView={!mediaMob ? 1 : !mediaTab ? 2 : 4}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex items-center"
      >
        <button
          onClick={() => swiper.slideNext(1)}
          className="hover:bg-sky-700"
        ></button>
        <button onClick={() => swiper.slidePrev(1)}></button>

        {error && <h1>We have some problems</h1>}
        {!loading &&
          !error &&
          productData.map((el: any, index) => (
            <SwiperSlide
              key={index}
              className={`${!mediaMob ? "px-16" : !mediaTab ? "px-10" : ""}`}
            >
              <CardStd {...el} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
