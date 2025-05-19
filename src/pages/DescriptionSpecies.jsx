import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DescriptionSpecies = () => {
  const params = useParams();
  const { store } = useGlobalReducer();
  const species = store.species;

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard
          name={species[params.id].name}
          imagePage={"species"}
          uid={species[params.id].url.split("/")[5]}
        />
      </div>
      <div>
        <DescriptionDetails
          title1={"Classification"}
          data1={
            species[params.id] ? species[params.id].classification : "Charging"
          }
          title2={"Designation"}
          data2={
            species[params.id] ? species[params.id].designation : "Charging"
          }
          title3={"Average height"}
          data3={
            species[params.id] ? species[params.id].average_height : "Charging"
          }
          title4={"Skin colors"}
          data4={
            species[params.id] ? species[params.id].skin_colors : "Charging"
          }
          title5={"Hair colors"}
          data5={
            species[params.id] ? species[params.id].hair_colors : "Charging"
          }
          title6={"Eye colors"}
          data6={
            species[params.id] ? species[params.id].eye_colors : "Charging"
          }
          title7={"Average lifespan"}
          data7={
            species[params.id]
              ? species[params.id].average_lifespan
              : "Charging"
          }
          title8={"Language"}
          data8={species[params.id] ? species[params.id].language : "Charging"}
          title9={"Homeworld"}
          data9={species[params.id]?.homeworld?.name || "n/a"}
          title10={"People"}
          data10={
            species[params.id] ? (
              species[params.id].people.map((people, idx) => (
                <p key={idx}>{people.name}</p>
              ))
            ) : (
              <p>Charging</p>
            )
          }
          title11={"Appearances"}
          data11={
            species[params.id] ? (
              species[params.id].films.map((film, idx) => (
                <p key={idx}>{film.title}</p>
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
