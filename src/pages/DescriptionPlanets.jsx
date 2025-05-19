import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DescriptionPlanets = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const planets = store.planets;

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard
          name={planets[params.id].name}
          imagePage={"planets"}
          uid={planets[params.id].url.split("/")[5]}
        />
      </div>
      <div>
        <DescriptionDetails
          title1={"Rotation period"}
          data1={
            planets[params.id] ? planets[params.id].rotation_period : "Charging"
          }
          title2={"Orbital period"}
          data2={
            planets[params.id] ? planets[params.id].orbital_period : "Charging"
          }
          title3={"Diameter"}
          data3={planets[params.id] ? planets[params.id].diameter : "Charging"}
          title4={"Climate"}
          data4={planets[params.id] ? planets[params.id].climate : "Charging"}
          title5={"Gravity"}
          data5={planets[params.id] ? planets[params.id].gravity : "Charging"}
          title6={"Terrain"}
          data6={planets[params.id] ? planets[params.id].terrain : "Charging"}
          title7={"Surface water"}
          data7={
            planets[params.id] ? planets[params.id].surface_water : "Charging"
          }
          title8={"Population"}
          data8={
            planets[params.id] ? planets[params.id].population : "Charging"
          }
          title9={"Residents"}
          data9={
            planets[params.id]?.residents &&
            planets[params.id].residents.map((resident, idx) => (
              <p key={idx}>{resident.name}</p>
            ))
          }
          title10={"Films"}
          data10={
            planets[params.id]?.films &&
            planets[params.id].films.map((film, idx) => (
              <p key={idx}>{film.title}</p>
            ))
          }
        />
      </div>
    </div>
  );
};
