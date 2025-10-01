// ProductSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider1 from "../assets/img/Slider1.png";
import Slider2 from "../assets/img/Slider2.png";
import Slider3 from "../assets/img/Slider3.png";
import Slider4 from "../assets/img/Slider4.png";
import ColorSelector from "./ColorSelector";

const products = [
  { id: 1, img: Slider1, name: "Tonny lanka", price: "£250" },
  { id: 2, img: Slider2, name: "Table Pro", price: "£120" },
  { id: 3, img: Slider3, name: "Drink chair", price: "£250" },
  { id: 4, img: Slider4, name: "Rest King", price: "£300" },
  { id: 5, img: Slider4, name: "Rest King", price: "£300" },
  { id: 6, img: Slider4, name: "Rest King", price: "£300" },
];

const ProductSlider = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 py-10 w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // fallback
        breakpoints={{
          640: { slidesPerView: 1 },  // phones
          768: { slidesPerView: 2 },  // tablets
          1024: { slidesPerView: 3 }, // laptops
          1280: { slidesPerView: 4 }, // desktops
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: "100%", height: "100%" }} // 👈 important
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative bg-[#F6F6F6] rounded-xl flex flex-col justify-between h-full">
              <h1 className="absolute bg-white w-fit rounded-full px-4 py-2 top-4 right-4 font-semibold text-sm sm:text-base">
                30% Off
              </h1>
              <img
                className="mx-auto max-h-[250px] object-contain pt-10"
                src={item.img}
                alt={item.name}
              />
              <div className="flex justify-between items-center px-4 py-6">
                <div>
                  <h1 className="font-normal text-base sm:text-lg">{item.name}</h1>
                  <h1 className="font-extrabold text-lg sm:text-xl">{item.price}</h1>
                </div>
                <ColorSelector/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
