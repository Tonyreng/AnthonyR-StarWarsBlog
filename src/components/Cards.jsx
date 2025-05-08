export const Cards = (props) => {
  return (
    <div className="container d-flex flex-row  overflow-x-scroll">
      {props.value.map((value) => {
        return (
          <div key={value.uid} className="card" style={{ width: "18rem" }}>
            <img
              src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/12/star-wars-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
