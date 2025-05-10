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

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const peopleApi = () => {
    fetch("https://swapi.info/api/people")
      .then((res) => res.json()) //
      .then((data) =>
        dispatch({
          type: "set_Characters",
          payload: data,
        })
      )
      .catch((error) => console.error(error));
  };

  const planetsApi = () => {
    fetch("https://swapi.info/api/planets")
      .then((res) => res.json()) // Parse the JSON content from the API to be consumed
      .then((data) =>
        dispatch({
          type: "set_Planets",
          payload: data,
        })
      ) // Log the JSON response to your console
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    peopleApi();
    planetsApi();
  }, []);

  let characters = store.characters;
  let planets = store.planets;

  return (
    <>
      <Header />
      <div className="container">
        <div className="mb-5">
          <div
            className="d-flex justify-content-between align-items-center mb-4"
            style={{ borderBottom: "1px solid #48494a" }}
          >
            <h2 className="text-white">Characters</h2>
            <Link to="/">SEE ALL</Link>
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
            {characters.map((character, idx) => (
              <SwiperSlide key={idx} id={character.uid}>
                <Card
                  name={character.name}
                  data1={`Gender: ${character.gender}`}
                  data2={`Hair color: ${character.hair_color}`}
                  data3={`Eye color: ${character.eye_color}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <div
            className="d-flex justify-content-between align-items-center mb-4"
            style={{ borderBottom: "1px solid #48494a" }}
          >
            <h2>Planets</h2>
            <Link to="/">SEE ALL</Link>
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
            {planets.map((character, idx) => (
              <SwiperSlide key={idx} id={character.uid}>
                <Card
                  name={character.name}
                  data1={`Gender: ${character.gender}`}
                  data2={`Hair color: ${character.hair_color}`}
                  data3={`Eye color: ${character.eye_color}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
