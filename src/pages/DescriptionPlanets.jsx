import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const DescriptionPlanets = () => {
  const params = useParams();
  const { store, dispatch } = useGlobalReducer();
  const planets = store.planets;
  const [planetDetails, setPlanetDetails] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlanetsDetails(planets[params.id]);
      setPlanetDetails(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard name={planets[params.id].name} />
      </div>
      <div>
        <DescriptionDetails
          title1={"Rotation period"}
          data1={planetDetails ? planetDetails.rotation_period : "Charging"}
          title2={"Orbital period"}
          data2={planetDetails ? planetDetails.orbital_period : "Charging"}
          title3={"Diameter"}
          data3={planetDetails ? planetDetails.diameter : "Charging"}
          title4={"Climate"}
          data4={planetDetails ? planetDetails.climate : "Charging"}
          title5={"Gravity"}
          data5={planetDetails ? planetDetails.gravity : "Charging"}
          title6={"Terrain"}
          data6={planetDetails ? planetDetails.terrain : "Charging"}
          title7={"Surface water"}
          data7={planetDetails ? planetDetails.surface_water : "Charging"}
          title8={"Population"}
          data8={planetDetails ? planetDetails.population : "Charging"}
          title9={"Residents"}
          data9={
            planetDetails?.residents &&
            planetDetails.residents.map((resident, idx) => (
              <p key={idx}>{resident.name}</p>
            ))
          }
          title10={"Films"}
          data10={
            planetDetails?.films && (
              planetDetails.films.map((film, idx) => (
                <p key={idx}>{film.title}</p>
              ))
            )
          }
        />
      </div>
    </div>
  );
};
