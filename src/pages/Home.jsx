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
import { Slaider } from "../components/Slaider.jsx";

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

  const vehilclesApi = () => {
    fetch("https://swapi.info/api/vehicles")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "set_Vehicles",
          payload: data,
        })
      )
      .catch((error) => console.error(error));
  };

  const starshipsApi = () => {
    fetch("https://swapi.info/api/starships")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "set_Starships",
          payload: data,
        })
      )
      .catch((error) => console.error(error));
  };

  const speciesApi = () => {
    fetch("https://swapi.info/api/species")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "set_Species",
          payload: data,
        })
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    peopleApi();
    planetsApi();
    vehilclesApi();
    starshipsApi();
    speciesApi();
  }, []);

  const characters = store.characters;
  const planets = store.planets;
  const vehicles = store.vehicles;
  const starships = store.starships;
  const species = store.species;

  return (
    <>
      <div className="container">
        <Slaider
          title="Characters"
          list={characters.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx}>
              <Card
                name={elem.name}
                idx={idx}
                page={'character'}
                data1={`Gender: ${elem.gender}`}
                data2={`Hair color: ${elem.hair_color}`}
                data3={`Eye color: ${elem.eye_color}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Species"
          list={species.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx}>
              <Card
                name={elem.name}
                idx={idx}
                data1={`Homeworld: ${elem.homeworld}`}
                data2={`Language: ${elem.language}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Planets"
          list={planets.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx}>
              <Card
                name={elem.name}
                idx={idx}
                data1={`Population: ${elem.population}`}
                data2={`Terrain: ${elem.terrain}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Vehicles"
          list={vehicles.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx}>
              <Card
                name={elem.name}
                idx={idx}
                data1={`Model: ${elem.model}`}
                data2={`Class: ${elem.vehicle_class}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Starships"
          list={starships.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx}>
              <Card
                name={elem.name}
                idx={idx}
                data1={`Model: ${elem.model}`}
                data2={`Class: ${elem.starship_class}`}
              />
            </SwiperSlide>
          ))}
        />
      </div>
    </>
  );
};
