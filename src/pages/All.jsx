import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard.jsx";
import { DescriptionDetails } from "../components/DescriptionDetails.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const All = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const characters = store.characters;
  const planets = store.planets;
  const vehicles = store.vehicles;
  const starships = store.starships;
  const species = store.species;

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
      {planets.map((planet, idx) => {
        return (
          <Card
            name={planet.name}
            key={idx}
            idx={idx}
            uid={planet.url.split("/")[5]}
            page={"planets"}
            imagePage={"planets"}
            data1={`Population: ${planet.population}`}
            data2={`Terrain: ${planet.terrain}`}
          />
        );
      })}
      {vehicles.map((vehicle, idx) => {
        return (
          <Card
            name={vehicle.name}
            key={idx}
            idx={idx}
            uid={vehicle.url.split("/")[5]}
            page={"vehicles"}
            imagePage={"vehicles"}
            data1={`Model: ${vehicle.model}`}
            data2={`Class: ${vehicle.vehicle_class}`}
          />
        );
      })}
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
