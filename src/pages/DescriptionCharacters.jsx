import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link} from "react-router-dom";
import { DescriptionComponent } from "../components/Description.jsx";


export const Description = () => {
  const { store, dispatch } = useGlobalReducer();

    return <>
        <DescriptionComponent/>
    </>;
};
