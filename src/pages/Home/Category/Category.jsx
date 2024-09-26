import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import apple from '../../../assets/home/apple.jpg';
import asus from '../../../assets/home/asus.jpg';
import dell from '../../../assets/home/Dell.jpg';
import hp from '../../../assets/home/hp.jpg';
import lenovo from '../../../assets/home/lenovo.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle heading={"Order Online"} subHeading={"From 11.00am to 11.00pm"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
            <SwiperSlide>
                <img src={hp} alt="" />
                <h3 className='text-4xl uppercase text-center -mt-20 text-white'>HP</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={dell} alt="" />
                <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Dell</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={apple} alt="" />
                <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Apple</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={lenovo} alt="" />
                <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Lenovo</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={asus} alt="" />
                <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Asus</h3>
            </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;