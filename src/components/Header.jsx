export const Header = () => {
  return (
    <>
      <header
        className="d-flex justify-content-between p-4"
        style={{ height: "15%", width: "100%" }}
      >
        <div>
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

        <div>
          <a href="#">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              alt="StarWars logo"
              style={{ height: "100%" }}
            />
          </a>
        </div>
        <div
          className="d-flex justify-content-between text-white"
          style={{ height: "fit-content" }}
        >
          <div className="d-flex justify-content-between m-2">
            <i className="fa-solid fa-magnifying-glass m-2"></i>
            <p>SEARCH</p>
          </div>
          <div className="d-flex justify-content-between m-2">
            <i className="fa-solid fa-user m-2"></i>
            <p>LOG IN</p>
          </div>
        </div>
      </header>
    </>
  );
};
