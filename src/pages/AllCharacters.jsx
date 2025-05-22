import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard.jsx";
import { DescriptionDetails } from "../components/DescriptionDetails.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const AllCharacters = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const characters = store.characters;

  return (
    <div
      className="d-flex"
      style={{ flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
    >
      {characters.map((character, idx) => {
        return (
          <Card
            name={character.name}
            key={idx}
            idx={idx}
            uid={character.url.split("/")[5]}
            page={"character"}
            imagePage={"people"}
            data1={`Gender: ${character.gender}`}
            data2={`Hair color: ${character.hair_color}`}
            data3={`Eye color: ${character.eye_color}`}
          />
        );
      })}
    </div>
  );
};
