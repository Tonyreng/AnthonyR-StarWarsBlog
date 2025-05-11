import { Link } from "react-router-dom";
import { DescriptionCard } from "./DescriptionCard";

export const Description = () => {
  return (
    <div className="container d-flex justify-content-center">
      <DescriptionCard name={'Tony'} />
    </div>
  );
};
