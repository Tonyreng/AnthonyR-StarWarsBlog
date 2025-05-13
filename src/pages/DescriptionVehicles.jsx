import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const DescriptionVehicles = () => {
  const params = useParams();
  const { store, dispatch } = useGlobalReducer();
  const vehicles = store.vehicles;
  const [vehicleDetails, setVehicleDetails] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVehiclesDetails(vehicles[params.id]);
      setVehicleDetails(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard name={vehicles[params.id].name} />
      </div>
      <div>
        <DescriptionDetails
          title1={"Model"}
          data1={vehicleDetails ? vehicleDetails.model : "Charging"}
          title2={"Manufacturer"}
          data2={vehicleDetails ? vehicleDetails.manufacturer : "Charging"}
          title3={"Cost in credits"}
          data3={vehicleDetails ? vehicleDetails.cost_in_credits : "Charging"}
          title4={"Length"}
          data4={vehicleDetails ? vehicleDetails.length : "Charging"}
          title5={"Max atmosphering speed"}
          data5={
            vehicleDetails ? vehicleDetails.max_atmosphering_speed : "Charging"
          }
          title6={"Crew"}
          data6={vehicleDetails ? vehicleDetails.crew : "Charging"}
          title7={"Passengers"}
          data7={vehicleDetails ? vehicleDetails.passengers : "Charging"}
          title8={"Cargo capacity"}
          data8={vehicleDetails ? vehicleDetails.cargo_capacity : "Charging"}
          title9={"Consumables"}
          data9={vehicleDetails ? vehicleDetails.consumables : "Charging"}
          title10={"Vehicle class"}
          data10={vehicleDetails ? vehicleDetails.vehicle_class : "Charging"}
          title11={"Pilots"}
          data11={
            vehicleDetails?.pilots &&
            vehicleDetails.pilots.map((pilot, idx) => (
              <p key={idx}>{pilot.name}</p>
            ))
          }
          title12={"Films"}
          data12={
            vehicleDetails?.films &&
            vehicleDetails.films.map((film, idx) => (
              <p key={idx}>{film.title}</p>
            ))
          }
        />
      </div>
    </div>
  );
};
