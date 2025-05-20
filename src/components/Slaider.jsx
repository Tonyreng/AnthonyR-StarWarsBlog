import { useEffect } from "react";
import { Header } from "../components/Header.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";

export const Slaider = (props) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="mb-5">
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{ borderBottom: "3px solid #48494a" }}
      >
        <h2 className="text-white">{props.title}</h2>
        <Link to="/all">SEE ALL</Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          300: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
      >
        {props.list}
      </Swiper>
    </div>
  );
};
