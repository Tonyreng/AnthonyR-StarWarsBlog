import { Link } from "react-router-dom";

export const DescriptionCard = (props) => {
  return (
    <div
      className="card mb-3 text-white border-secondary"
      style={{ maxWidth: "960px", maxHeight: "520px", background: "#1D1E1F" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://yt3.googleusercontent.com/6h_TKBeaT6QOIqIkjFO96tEpEcbqmW9SiUtit0L0_J-fM5uwwqYGuEa78-Zpol3jnZFugoY=s900-c-k-c0x00ffffff-no-rj"
            className="img-fluid rounded-start"
            alt="..."
            style={{ height: "100%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fs-1">{props.name}</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              rem quos adipisci doloremque aspernatur est nemo delectus iure
              molestias amet, ipsum, praesentium qui veniam modi saepe velit
              iusto soluta repellendus! Hic debitis, nobis ipsa ipsum
              necessitatibus beatae suscipit distinctio aliquid, pariatur
              nostrum dolores error commodi, ea quod nisi corrupti autem
              obcaecati sapiente laudantium quis illo. Voluptatibus aliquam iure
              dolorum ipsam? Iure, neque consequuntur. Aspernatur similique
              cumque beatae fugit quasi nihil facere, est accusantium nesciunt
              reprehenderit, debitis inventore et? Voluptas eveniet cumque ad.
              Perspiciatis beatae voluptates ipsa placeat tempore deleniti
              delectus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
