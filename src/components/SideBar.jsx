import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SideBar = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const dataList = store.dataList;

  return (
    <>
      <div
        className="nav flex nav-pills custom-pills text-center justify-content-center m-4"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link text-white"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          ALL
        </button>
        {dataList.map((data) => {
          return (
            <button
              className="nav-link text-white"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              {data.toUpperCase()}
            </button>
          );
        })}
      </div>
    </>
  );
};
