import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DescriptionCharacters = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const characters = store.characters;

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard
          name={characters && characters[params.id].name}
          imagePage={"people"}
          uid={characters && characters[params.id].url.split("/")[5]}
        />
      </div>
      <div>
        <DescriptionDetails
          title1={"Gender"}
          data1={characters ? characters[params.id].gender : "Charging"}
          title2={"Height"}
          data2={characters ? characters[params.id].height : "Charging"}
          title3={"Mass"}
          data3={characters ? characters[params.id].mass : "Charging"}
          title4={"Hair color"}
          data4={characters ? characters[params.id].hair_color : "Charging"}
          title5={"Skin color"}
          data5={characters ? characters[params.id].skin_color : "Charging"}
          title6={"Eye color"}
          data6={characters ? characters[params.id].eye_color : "Charging"}
          title7={"Birth year"}
          data7={characters ? characters[params.id].birth_year : "Charging"}
          title8={"Homeworld"}
          data8={characters && characters[params.id].homeworld.name}
          title9={"Appearances"}
          data9={
            characters ? (
              characters[params.id].films.map((film, idx) => (
                <p key={idx}>{film.title}</p>
              ))
            ) : (
              <p>Charging</p>
            )
          }
          title10={"Vehicles"}
          data10={
            characters ? (
              characters[params.id].vehicles.map((vehicle, idx) => (
                <p key={idx}>{vehicle.name}</p>
              ))
            ) : (
              <p>Charging</p>
            )
          }
          title11={"Starships"}
          data11={
            characters ? (
              characters[params.id].starships.map((starship, idx) => (
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
