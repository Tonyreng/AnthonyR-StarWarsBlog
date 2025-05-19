import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const DescriptionCharacters = () => {
  const params = useParams();
  const { store, dispatch } = useGlobalReducer();
  const characters = store.characters;
  const [characterDetails, setCharacterDetails] = useState(null);

  const fetchDataFromUrl = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener datos de la URL:", error);
    }
  };

  const fetchMultipleData = async (urls) => {
    try {
      const data = await Promise.all(urls.map((url) => fetchDataFromUrl(url)));
      return data;
    } catch (error) {
      console.error("Error al obtener múltiples datos:", error);
    }
  };

  const getCharacterDetails = async (character) => {
    const homeworld = await fetchDataFromUrl(character.homeworld);
    const films = await fetchMultipleData(character.films);
    const starships = await fetchMultipleData(character.starships);
    const vehicles = await fetchMultipleData(character.vehicles);
    const species = await fetchMultipleData(character.species);

    return {
      ...character,
      homeworld,
      films,
      starships,
      vehicles,
      species,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterDetails(characters[params.id]);
      setCharacterDetails(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard
          name={characters[params.id].name}
          imagePage={"people"}
          uid={characters[params.id].url.split("/")[5]}
        />
      </div>
      <div>
        <DescriptionDetails
          title1={"Gender"}
          data1={characterDetails ? characterDetails.gender : "Charging"}
          title2={"Height"}
          data2={characterDetails ? characterDetails.height : "Charging"}
          title3={"Mass"}
          data3={characterDetails ? characterDetails.mass : "Charging"}
          title4={"Hair color"}
          data4={characterDetails ? characterDetails.hair_color : "Charging"}
          title5={"Skin color"}
          data5={characterDetails ? characterDetails.skin_color : "Charging"}
          title6={"Eye color"}
          data6={characterDetails ? characterDetails.eye_color : "Charging"}
          title7={"Birth year"}
          data7={characterDetails ? characterDetails.birth_year : "Charging"}
          title8={"Homeworld"}
          data8={characterDetails && characterDetails.homeworld.name}
          title9={"Appearances"}
          data9={
            characterDetails ? (
              characterDetails.films.map((film, idx) => (
                <p key={idx}>{film.title}</p>
              ))
            ) : (
              <p>Charging</p>
            )
          }
          title10={"Vehicles"}
          data10={
            characterDetails ? (
              characterDetails.vehicles.map((vehicle, idx) => (
                <p key={idx}>{vehicle.name}</p>
              ))
            ) : (
              <p>Charging</p>
            )
          }
          title11={"Starships"}
          data11={
            characterDetails ? (
              characterDetails.starships.map((starship, idx) => (
                <p key={idx}>{starship.name}</p>
              ))
            ) : (
              <p>Charging</p>
            )
          }
        />
      </div>
    </div>
  );
};
