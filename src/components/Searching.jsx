import { NavLink, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

export const Searching = (props) => {
  const navigate = useNavigate();
  const { store } = useGlobalReducer();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value === "") {
      setSuggestions([]);
      return;
    }

    const allItems = [
      ...store.characters.map((character, idx) => ({
        ...character,
        type: "character",
        uid: idx,
      })),
      ...store.species.map((specie, idx) => ({
        ...specie,
        type: "species",
        uid: idx,
      })),
      ...store.planets.map((planet, idx) => ({
        ...planet,
        type: "planets",
        uid: idx,
      })),
      ...store.vehicles.map((vehicle, idx) => ({
        ...vehicle,
        type: "vehicles",
        uid: idx,
      })),
      ...store.starships.map((starship, idx) => ({
        ...starship,
        type: "starships",
        uid: idx,
      })),
    ];

    const matches = allItems.filter((elem) =>
      elem.name.toLowerCase().includes(value)
    );

    setSuggestions(matches.slice(0, 5));
  };

  const handleSelect = (elem) => {
    navigate(`/${elem.type}/${elem.uid}`);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="position-relative">
      <input
        type="text"
        autoFocus
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        onBlur={(e) => setTimeout(() => props.handleOnBlur?.(e), 150)}
      />
      {suggestions.length > 0 && (
        <ul className="list-group position-absolute w-100 z-3">
          {suggestions.map((item, index) => (
            <li
              key={index}
              style={{ cursor: "pointer" }}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
