import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Card = (value) => {
  const navigate = useNavigate();
  return (
    <div
      className="card mx-2 text-white border border-secondary rounded "
      style={{ minWidth: "18rem", background: "#1D1E1F", minHeight: "21rem" }}
    >
      <img
        src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/12/star-wars-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1"
        className="card-img-top"
        alt={`Imagen de ${value.name}`}
      />
      <div className="card-body rounded" style={{ background: "#1D1E1F" }}>
        <div className="d-flex justify-content-between align-items-center mb-3 mt-1">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/${value.page}/${value.idx}`)}
          >
            <strong>{value.name}</strong>
          </span>
          <i className="fa-solid fa-heart" style={{ cursor: "pointer" }}></i>
        </div>
        <div className="d-flex flex-column">
          {value.data1 && <span>{value.data1.toUpperCase()}</span>}
          {value.data2 && <span>{value.data2.toUpperCase()}</span>}
          {value.data3 && <span>{value.data3.toUpperCase()}</span>}
        </div>
      </div>
    </div>
  );
};
