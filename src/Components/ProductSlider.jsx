// ProductSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider1 from "../assets/img/Slider1.png";
import Slider2 from "../assets/img/Slider2.png";
import Slider3 from "../assets/img/Slider3.png";
import Slider4 from "../assets/img/Slider4.png";
import ColorSelector from "./ColorSelector";

const products = [
  { id: 1, img: Slider1, name: "Tonny lanka", price: "£250", discount: "30% Off" },
  { id: 2, img: Slider2, name: "Table Pro", price: "£120", discount: "10% Off" },
  { id: 3, img: Slider3, name: "Drink chair", price: "£250", discount: "25% Off" },
  { id: 4, img: Slider4, name: "Rest King", price: "£300", discount: "15% Off" },
  { id: 5, img: Slider4, name: "Luxury Bed", price: "£500", discount: "50% Off" },
  { id: 6, img: Slider4, name: "Office Chair", price: "£200", discount: "20% Off" },
];

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative px-4 sm:px-8 lg:px-12 py-10 w-full">
      {/* 👇 Custom navigation buttons */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        onInit={(swiper) => {
          // Link refs AFTER swiper is initialized
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative bg-[#F6F6F6] rounded-xl flex flex-col justify-between h-full">
              {item.discount && (
                <h1 className="absolute bg-white w-fit rounded-full px-4 py-2 top-4 right-4 font-semibold text-sm sm:text-base">
                  {item.discount}
                </h1>
              )}
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
                <ColorSelector />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
