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

  const fetchDataFromUrl = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener datos de la URL:", error);
    }
  };

  const fetchMultipleData = async (urls) => {
    try {
      const data = await Promise.all(urls.map((url) => fetchDataFromUrl(url)));
      return data;
    } catch (error) {
      console.error("Error al obtener múltiples datos:", error);
    }
  };

  const getCharacterDetails = async (character) => {
    const homeworld = await fetchDataFromUrl(character.homeworld);
    const films = await fetchMultipleData(character.films);
    const starships = await fetchMultipleData(character.starships);
    const vehicles = await fetchMultipleData(character.vehicles);
    const species = await fetchMultipleData(character.species);

    return {
      ...character,
      homeworld,
      films,
      starships,
      vehicles,
      species,
    };
  };

  const getSpeciesDetails = async (species) => {
    const homeworld = species.homeworld
      ? await fetchDataFromUrl(species.homeworld)
      : null;
    const films = await fetchMultipleData(species.films);
    const people = await fetchMultipleData(species.people);

    return {
      ...species,
      homeworld,
      films,
      people,
    };
  };

  const getPlanetsDetails = async (planets) => {
    const residents = planets.residents.length
      ? await fetchDataFromUrl(planets.residents)
      : null;
    const films = planets.films.length
      ? await fetchMultipleData(planets.films)
      : null;

    return {
      ...planets,
      residents,
      films,
    };
  };

  const getVehiclesDetails = async (vehicles) => {
    const pilots = vehicles.pilots.length
      ? await fetchDataFromUrl(vehicles.pilots)
      : null;
    const films = vehicles.films.length
      ? await fetchMultipleData(vehicles.films)
      : null;

    return {
      ...vehicles,
      pilots,
      films,
    };
  };

  const getStarshipsDetails = async (starships) => {
    const pilots = starships.pilots.length
      ? await fetchDataFromUrl(starships.pilots)
      : null;
    const films = starships.films.length
      ? await fetchMultipleData(starships.films)
      : null;

    return {
      ...starships,
      pilots,
      films,
    };
  };

  const peopleApi = async () => {
    try {
      const response = await fetch("https://swapi.info/api/people");
      const data = await response.json();
      const simpleData = await Promise.all(
        data.map((elem) => getCharacterDetails(elem))
      );
      return dispatch({
        type: "set_Characters",
        payload: simpleData,
      });
    } catch (error) {
      return console.error(error);
    }
  };

  const speciesApi = async () => {
    try {
      const response = await fetch("https://swapi.info/api/species");
      const data = await response.json();
      const simpleData = await Promise.all(
        data.map((elem) => getSpeciesDetails(elem))
      );
      return dispatch({
        type: "set_Species",
        payload: simpleData,
      });
    } catch (error) {
      return console.error(error);
    }
  };

  const planetsApi = async () => {
    try {
      const response = await fetch("https://swapi.info/api/planets");
      const data = await response.json();
      const simpleData = await Promise.all(
        data.map((elem) => getPlanetsDetails(elem))
      );
      return dispatch({
        type: "set_Planets",
        payload: simpleData,
      });
    } catch (error) {
      return console.error(error);
    }
  };

  const vehiclesApi = async () => {
    try {
      const response = await fetch("https://swapi.info/api/vehicles");
      const data = await response.json();
      const simpleData = await Promise.all(
        data.map((elem) => getVehiclesDetails(elem))
      );
      return dispatch({
        type: "set_Vehicles",
        payload: simpleData,
      });
    } catch (error) {
      return console.error(error);
    }
  };

  const starshipsApi = async () => {
    try {
      const response = await fetch("https://swapi.info/api/starships");
      const data = await response.json();
      const simpleData = await Promise.all(
        data.map((elem) => getStarshipsDetails(elem))
      );
      return dispatch({
        type: "set_Starships",
        payload: simpleData,
      });
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    peopleApi();
    planetsApi();
    vehiclesApi();
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
          page={"characters"}
          list={characters.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx}>
              <Card
                name={elem.name}
                idx={idx}
                uid={elem.url.split("/")[5]}
                page={"character"}
                imagePage={"people"}
                data1={`Gender: ${elem.gender}`}
                data2={`Hair color: ${elem.hair_color}`}
                data3={`Eye color: ${elem.eye_color}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Species"
          page={"species"}
          list={species.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx} page={"species"}>
              <Card
                name={elem.name}
                idx={idx}
                uid={elem.url.split("/")[5]}
                page={"species"}
                imagePage={"species"}
                data1={`Homeworld: ${elem?.homeworld?.name || "n/a"}`}
                data2={`Language: ${elem.language}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Planets"
          page={"planets"}
          list={planets.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx} page={"planets"}>
              <Card
                name={elem.name}
                idx={idx}
                uid={elem.url.split("/")[5]}
                page={"planets"}
                imagePage={"planets"}
                data1={`Population: ${elem.population}`}
                data2={`Terrain: ${elem.terrain}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Vehicles"
          page={"vehicles"}
          list={vehicles.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx} page={"vehicles"}>
              <Card
                name={elem.name}
                idx={idx}
                uid={elem.url.split("/")[5]}
                page={"vehicles"}
                imagePage={"vehicles"}
                data1={`Model: ${elem.model}`}
                data2={`Class: ${elem.vehicle_class}`}
              />
            </SwiperSlide>
          ))}
        />

        <Slaider
          title="Starships"
          page={"starships"}
          list={starships.map((elem, idx) => (
            <SwiperSlide key={idx} id={idx} page={"starships"}>
              <Card
                name={elem.name}
                idx={idx}
                uid={elem.url.split("/")[5]}
                page={"starships"}
                imagePage={"starships"}
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
