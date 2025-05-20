import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SideBar = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const dataList = store.dataList;
  console.log(dataList);

  return (
    <>
      <div
        className="nav flex-column nav-pills me-3"
        style={{ width: "25%" }}
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          All
        </button>
        {dataList.map((data) => {
          return (
            <button
              className="nav-link"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              {data}
            </button>
          );
        })}
        {/* <button
          className="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Home
        </button>
        <button
          className="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Profile
        </button>
        <button
          className="nav-link"
          id="v-pills-disabled-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-disabled"
          type="button"
          role="tab"
          aria-controls="v-pills-disabled"
          aria-selected="false"
          disabled
        >
          Disabled
        </button>
        <button
          className="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Messages
        </button>
        <button
          className="nav-link"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Settings
        </button> */}
      </div>
    </>
  );
};
