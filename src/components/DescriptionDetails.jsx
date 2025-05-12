import { Link } from "react-router-dom";

export const DescriptionDetails = (props) => {
  return (
    <div className="text-center">
      <div
        className="card text-center text-white"
        style={{ background: "#1D1E1F" }}
      >
        <div className="card-body">
          <div className="row">
            {props.title1 && (
              <div
                className="col flex-column border-end "
                style={{ minHeight: "250px" }}
              >
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title1}</h2>
                <span>{props.data1}</span>
              </div>
            )}
            {props.title2 && (
              <div className="col flex-column border-end" style={{ minHeight: "250px" }}>
                
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title2}</h2>
                <span>{props.data2}</span>
              </div>
            )}
            {props.title3 && (
              <div className="col flex-column border-end" style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title3}</h2>
                <span>{props.data3}</span>
              </div>
            )}
            {props.title4 && (
              <div className="col flex-column border-end " style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title4}</h2>
                <span>{props.data4}</span>
              </div>
            )}
            {props.title5 && (
              <div className="col flex-column border-end " style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title5}</h2>
                <span>{props.data5}</span>
              </div>
            )}
            {props.title6 && (
              <div className="col flex-column border-end " style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title6}</h2>
                <span>{props.data6}</span>
              </div>
            )}
            {props.title7 && (
              <div className="col flex-column border-end " style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title7}</h2>
                <span>{props.data7}</span>
              </div>
            )}
            {props.title8 && (
              <div className="col flex-column border-end " style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title8}</h2>
                <span>{props.data8}</span>
              </div>
            )}
            {props.title9 && (
              <div className="col flex-column border-end " style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title9}</h2>
                {props.data9}
              </div>
            )}
            {props.title10 && (
              <div
                className={`col flex-column ${props.title11 && "border-end"}`} style={{ minHeight: "250px" }}
              >
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title10}</h2>
                <span>{props.data10}</span>
              </div>
            )}
            {props.title11 && (
              <div className="col flex-column" style={{ minHeight: "250px" }}>
                <h2 className="mb-3" style={{color: "#FF1744"}}>{props.title11}</h2>
                <span>{props.data11}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
