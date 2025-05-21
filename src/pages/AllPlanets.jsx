import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard.jsx";
import { DescriptionDetails } from "../components/DescriptionDetails.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const AllPlanets = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const planets = store.planets;

  return (
    <div
      className="d-flex"
      style={{ flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
    >
      {planets.map((planet, idx) => {
        return (
          <Card
            name={planet.name}
            idx={idx}
            uid={planet.url.split("/")[5]}
            page={"planets"}
            imagePage={"planets"}
            data1={`Population: ${planet.population}`}
            data2={`Terrain: ${planet.terrain}`}
          />
        );
      })}
    </div>
  );
};
