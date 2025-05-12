import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header
        className="d-flex p-4 mb-5"
        style={{
          height: "15%",
          width: "100%",
          borderBottom: "1px solid #48494a",
        }}
      >
        <div className="flex-grow-1">
          <ul className="nav">
            <li className="nav-item m-2">
              <a className="nav-link p-0" href="#">
                <i
                  className="fa-brands fa-tiktok text-white fs-5"
                  style={{ fontWeight: "100" }}
                ></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link p-0" href="#">
                <i className="fa-brands fa-instagram text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link p-0" href="#">
                <i className="fa-brands fa-x-twitter text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link p-0" href="#">
                <i className="fa-brands fa-facebook text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link p-0" href="#">
                <i className="fa-brands fa-youtube text-white fs-5"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-grow-1 d-flex justify-content-center">
          <a href="#">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              alt="StarWars logo"
              style={{ height: "126px", width: "291px" }}
              onClick={() => navigate("/")}
            />
          </a>
        </div>
        <div
          className="d-flex justify-content-end align-items-center text-white flex-grow-1"
          style={{ height: "fit-content" }}
        >
          <div className="d-flex justify-content-between align-items-center m-2">
            <i
              className="fa-solid fa-magnifying-glass m-2"
              style={{ cursor: "pointer" }}
            ></i>
            <span style={{ cursor: "pointer" }}>SEARCH</span>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <i
              className="fa-solid fa-user m-2"
              style={{ cursor: "pointer" }}
            ></i>
            <span style={{ cursor: "pointer" }}>LOG IN</span>
          </div>
        </div>
      </header>
    </>
  );
};
