import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const DescriptionStarships = () => {
  const params = useParams();
  const { store, dispatch } = useGlobalReducer();
  const starships = store.starships;
  const [starshipDetails, setStarshipDetails] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStarshipsDetails(starships[params.id]);
      setStarshipDetails(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard name={starships[params.id].name} />
      </div>
      <div>
        <DescriptionDetails
          title1={"Model"}
          data1={starshipDetails ? starshipDetails.model : "Charging"}
          title2={"Manufacturer"}
          data2={starshipDetails ? starshipDetails.manufacturer : "Charging"}
          title3={"Cost in credits"}
          data3={starshipDetails ? starshipDetails.cost_in_credits : "Charging"}
          title4={"Length"}
          data4={starshipDetails ? starshipDetails.length : "Charging"}
          title5={"Max atmosphering speed"}
          data5={
            starshipDetails
              ? starshipDetails.max_atmosphering_speed
              : "Charging"
          }
          title6={"Crew"}
          data6={starshipDetails ? starshipDetails.crew : "Charging"}
          title7={"Passengers"}
          data7={starshipDetails ? starshipDetails.passengers : "Charging"}
          title8={"Cargo capacity"}
          data8={starshipDetails ? starshipDetails.cargo_capacity : "Charging"}
          title9={"Consumables"}
          data9={starshipDetails ? starshipDetails.consumables : "Charging"}
          title10={"Hyperdrive rating"}
          data10={
            starshipDetails ? starshipDetails.hyperdrive_rating : "Charging"
          }
          title11={"MGLT"}
          data11={starshipDetails ? starshipDetails.MGLT : "Charging"}
          title12={"Starship class"}
          data12={starshipDetails ? starshipDetails.starship_class : "Charging"}
          title13={"Pilots"}
          data13={
            starshipDetails?.pilots &&
            starshipDetails.pilots.map((pilot, idx) => (
              <p key={idx}>{pilot.name}</p>
            ))
          }
          title14={"Films"}
          data14={
            starshipDetails?.films &&
            starshipDetails.films.map((film, idx) => (
              <p key={idx}>{film.title}</p>
            ))
          }
        />
      </div>
    </div>
  );
};
