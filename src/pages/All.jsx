import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card.jsx";

export const All = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const characters = store.characters;

  return (
    <div className="d-flex" style={{width: "100%"}}>
      {characters.map((character, idx) => {
        return (
          <Card
            name={character.name}
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
