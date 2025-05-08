import { useEffect } from "react";
import { Header } from "../components/Header.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Cards } from "../components/Cards.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const peopleApi = () => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "set_Characters",
          payload: data.results,
        })
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    peopleApi();
  }, []);

  let characters = store.characters;

  return (
    <>
      <Header />
      <Cards value={characters} />
  </>)
};
