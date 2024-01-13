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
import useProductData from '../dashboard/Product/useProductData';

export default function CarrouselProducts() {
    const swiper = useSwiper();
  
    const { productData, setProductData, loading, error, onFetchData } =
      useProductData();  
  return (
    <>
      <Swiper spaceBetween={20} slidesPerView={3} navigation={true} modules={[Navigation]} className="py-20 mySwiper flex items-center">
      <button onClick={() => swiper.slideNext(1)} className='hover:bg-sky-700'></button>
    <button onClick={() => swiper.slidePrev(1)}></button>

    {loading && <h1>Loading</h1>}
          {error && <h1>We have some problems</h1>}
          {!loading &&
            !error &&
            productData.map((el: any, index: any) =>  <SwiperSlide><CardStd {...el} /></SwiperSlide>)}
      </Swiper>
    </>
  );
}