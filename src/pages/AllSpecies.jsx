import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard.jsx";
import { DescriptionDetails } from "../components/DescriptionDetails.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const AllSpecies = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const species = store.species;

  return (
    <div
      className="d-flex"
      style={{ flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
    >
      {species.map((specie, idx) => {
        return (
          <Card
            name={specie.name}
            key={idx}
            idx={idx}
            uid={specie.url.split("/")[5]}
            page={"species"}
            imagePage={"species"}
            data1={`Homeworld: ${specie?.homeworld?.name || "n/a"}`}
            data2={`Language: ${specie.language}`}
          />
        );
      })}
    </div>
  );
};
