import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { Description } from "../components/Description.jsx";

export const DescriptionCharacters = () => {
  const { store, dispatch } = useGlobalReducer();

  return <Description />;
};
