import { useParams } from "react-router-dom";
import { DescriptionCard } from "../components/DescriptionCard";
import { DescriptionDetails } from "../components/DescriptionDetails";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const DescriptionSpecies = () => {
  const params = useParams();
  const { store, dispatch } = useGlobalReducer();
  const species = store.species;
  const [speciesDetails, setSpeciesDetails] = useState(null);

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

  const getSpeciesDetails = async (species) => {
    const homeworld = species.homeworld
      ? await fetchDataFromUrl(species.homeworld)
      : null;
    const films = await fetchMultipleData(species.films);
    const people = await fetchMultipleData(species.people);

    return {
      ...species,
      homeworld,
      films,
      people,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSpeciesDetails(species[params.id]);
      setSpeciesDetails(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-5">
        <DescriptionCard name={species[params.id].name} imagePage={"species"}
          uid={species[params.id].url.split("/")[5]}/>
      </div>
      <div>
        <DescriptionDetails
          title1={"Classification"}
          data1={speciesDetails ? speciesDetails.classification : "Charging"}
          title2={"Designation"}
          data2={speciesDetails ? speciesDetails.designation : "Charging"}
          title3={"Average height"}
          data3={speciesDetails ? speciesDetails.average_height : "Charging"}
          title4={"Skin colors"}
          data4={speciesDetails ? speciesDetails.skin_colors : "Charging"}
          title5={"Hair colors"}
          data5={speciesDetails ? speciesDetails.hair_colors : "Charging"}
          title6={"Eye colors"}
          data6={speciesDetails ? speciesDetails.eye_colors : "Charging"}
          title7={"Average lifespan"}
          data7={speciesDetails ? speciesDetails.average_lifespan : "Charging"}
          title8={"Language"}
          data8={speciesDetails ? speciesDetails.language : "Charging"}
          title9={"Homeworld"}
          data9={speciesDetails?.homeworld?.name || "n/a"}
          title10={"People"}
          data10={
            speciesDetails ? (
              speciesDetails.people.map((people, idx) => (
                <p key={idx}>{people.name}</p>
              ))
            ) : (
              <p>Charging</p>
            )
          }
          title11={"Appearances"}
          data11={
            speciesDetails ? (
              speciesDetails.films.map((film, idx) => (
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
