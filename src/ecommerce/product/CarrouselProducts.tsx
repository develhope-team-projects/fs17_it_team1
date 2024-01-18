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
  const [media, setMedia] = useState(med.matches);

  med.addEventListener("change", () => {
    setMedia(med.matches);
  });

  const { productData, loading, error } =
    useProductData();
  return (
    <div className="py-20 h-2/6">
      <h2 className="flex items-center text-5xl font-bold dark:text-our-black my-1 mx-2 pb-5">
        Best sellers
      </h2>
      <hr />
      <Swiper
        spaceBetween={30}
        slidesPerView={media ? 4 : 1}
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
          productData.map((el: any) => (
            <SwiperSlide>
              <CardStd {...el} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
