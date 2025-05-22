import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard.jsx";
import { DescriptionDetails } from "../components/DescriptionDetails.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const AllStarships = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const starships = store.starships;

  return (
    <div
      className="d-flex"
      style={{ flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
    >
      {starships.map((starship, idx) => {
        return (
          <Card
            name={starship.name}
            key={idx}
            idx={idx}
            uid={starship.url.split("/")[5]}
            page={"starships"}
            imagePage={"starships"}
            data1={`Model: ${starship.model}`}
            data2={`Class: ${starship.starship_class}`}
          />
        );
      })}
    </div>
  );
};
