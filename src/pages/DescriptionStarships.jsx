import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DescriptionStarships = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const starships = store.starships;

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard
          name={starships[params.id].name}
          imagePage={"starships"}
          uid={starships[params.id].url.split("/")[5]}
        />
      </div>
      <div>
        <DescriptionDetails
          title1={"Model"}
          data1={starships[params.id] ? starships[params.id].model : "Charging"}
          title2={"Manufacturer"}
          data2={
            starships[params.id]
              ? starships[params.id].manufacturer
              : "Charging"
          }
          title3={"Cost in credits"}
          data3={
            starships[params.id]
              ? starships[params.id].cost_in_credits
              : "Charging"
          }
          title4={"Length"}
          data4={
            starships[params.id] ? starships[params.id].length : "Charging"
          }
          title5={"Max atmosphering speed"}
          data5={
            starships[params.id]
              ? starships[params.id].max_atmosphering_speed
              : "Charging"
          }
          title6={"Crew"}
          data6={starships[params.id] ? starships[params.id].crew : "Charging"}
          title7={"Passengers"}
          data7={
            starships[params.id] ? starships[params.id].passengers : "Charging"
          }
          title8={"Cargo capacity"}
          data8={
            starships[params.id]
              ? starships[params.id].cargo_capacity
              : "Charging"
          }
          title9={"Consumables"}
          data9={
            starships[params.id] ? starships[params.id].consumables : "Charging"
          }
          title10={"Hyperdrive rating"}
          data10={
            starships[params.id]
              ? starships[params.id].hyperdrive_rating
              : "Charging"
          }
          title11={"MGLT"}
          data11={starships[params.id] ? starships[params.id].MGLT : "Charging"}
          title12={"Starship class"}
          data12={
            starships[params.id]
              ? starships[params.id].starship_class
              : "Charging"
          }
          title13={"Pilots"}
          data13={
            starships[params.id]?.pilots &&
            starships[params.id].pilots.map((pilot, idx) => (
              <p key={idx}>{pilot.name}</p>
            ))
          }
          title14={"Films"}
          data14={
            starships[params.id]?.films &&
            starships[params.id].films.map((film, idx) => (
              <p key={idx}>{film.title}</p>
            ))
          }
        />
      </div>
    </div>
  );
};
