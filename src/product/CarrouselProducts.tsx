//-----------------------------!!!!!!!DA FINIRE--------------------------
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import CardStd, { Card } from './CardStd';
const test3: Card = {
    title: "Buon Prodotto",
    rating: 4,
    img: "https://cdn-7.motorsport.com/images/amp/0ZRabeN0/s1000/carlos-sainz-ferrari-charles-l.jpg",
    price: 75.99,
  };

export default function CarrouselProducts() {
    const swiper = useSwiper();
  return (
    <>
      <Swiper spaceBetween={5} slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper ">
      <button onClick={() => swiper.slideNext(1)}></button>
    <button onClick={() => swiper.slidePrev(1)}></button>
        <SwiperSlide><CardStd {...test3} /></SwiperSlide>
        <SwiperSlide><CardStd {...test3} /></SwiperSlide>
        <SwiperSlide><CardStd {...test3} /></SwiperSlide>
        <SwiperSlide><CardStd {...test3} /></SwiperSlide>
      </Swiper>
    </>
  );
}