import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { NavLink as Link } from 'react-router-dom';
import BrandContext from '../contexts/BrandContext';
import BrandCard from './BrandCard';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import '../styles/homeSlider.css';

SwiperCore.use([Navigation]);

const HomeSlider = () => {
  const { brands } = useContext(BrandContext);
  return (
    <div className="m-10">
      <div className="homeslider">
        <h2 className="my-5 pl-20">Les marques</h2>
        <div className="homeslider-slider">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={false}
            loopFillGroupWithBlank={true}
            navigation={true}
            className="mySwiper"
          >
            <div className="flex flex-row justify-between justify-items-center">
              {brands?.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <BrandCard brand={brand} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="homefilter_div_button">
        <Link to={`/brands/`}>
          <button className="homefilter_button">Afficher tout</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlider;
