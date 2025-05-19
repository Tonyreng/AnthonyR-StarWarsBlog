import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DescriptionVehicles = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const vehicles = store.vehicles;

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard
          name={vehicles[params.id].name}
          imagePage={"vehicles"}
          uid={vehicles[params.id].url.split("/")[5]}
        />
      </div>
      <div>
        <DescriptionDetails
          title1={"Model"}
          data1={vehicles[params.id] ? vehicles[params.id].model : "Charging"}
          title2={"Manufacturer"}
          data2={
            vehicles[params.id] ? vehicles[params.id].manufacturer : "Charging"
          }
          title3={"Cost in credits"}
          data3={
            vehicles[params.id]
              ? vehicles[params.id].cost_in_credits
              : "Charging"
          }
          title4={"Length"}
          data4={vehicles[params.id] ? vehicles[params.id].length : "Charging"}
          title5={"Max atmosphering speed"}
          data5={
            vehicles[params.id]
              ? vehicles[params.id].max_atmosphering_speed
              : "Charging"
          }
          title6={"Crew"}
          data6={vehicles[params.id] ? vehicles[params.id].crew : "Charging"}
          title7={"Passengers"}
          data7={
            vehicles[params.id] ? vehicles[params.id].passengers : "Charging"
          }
          title8={"Cargo capacity"}
          data8={
            vehicles[params.id]
              ? vehicles[params.id].cargo_capacity
              : "Charging"
          }
          title9={"Consumables"}
          data9={
            vehicles[params.id] ? vehicles[params.id].consumables : "Charging"
          }
          title10={"Vehicle class"}
          data10={
            vehicles[params.id] ? vehicles[params.id].vehicle_class : "Charging"
          }
          title11={"Pilots"}
          data11={
            vehicles[params.id]?.pilots &&
            vehicles[params.id].pilots.map((pilot, idx) => (
              <p key={idx}>{pilot.name}</p>
            ))
          }
          title12={"Films"}
          data12={
            vehicles[params.id]?.films &&
            vehicles[params.id].films.map((film, idx) => (
              <p key={idx}>{film.title}</p>
            ))
          }
        />
      </div>
    </div>
  );
};
