import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard.jsx";
import { DescriptionDetails } from "../components/DescriptionDetails.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const AllVehicles = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const vehicles = store.vehicles;

  return (
    <div
      className="d-flex"
      style={{ flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
    >
      {vehicles.map((vehicle, idx) => {
        return (
          <Card
            name={vehicle.name}
            idx={idx}
            uid={vehicle.url.split("/")[5]}
            page={"vehicles"}
            imagePage={"vehicles"}
            data1={`Model: ${vehicle.model}`}
            data2={`Class: ${vehicle.vehicle_class}`}
          />
        );
      })}
    </div>
  );
};
