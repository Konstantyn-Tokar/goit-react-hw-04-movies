import { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import s from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.currentTarget.value.toLowerCase();

    setSearchQuery(value);
  };

  useEffect(() => {
    if (history.location?.search !== "") {
      const prevQuery = history.location?.search.split("=")[1];

      onSubmit(prevQuery);
      setSearchQuery(prevQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location?.search]);

  const handleSudmit = (e) => {
    e.preventDefault();

    history.push({ ...history.location, search: `?query=${searchQuery}` });

    if (searchQuery.trim() === "") {
      toast.warn("Ввведите название фильма ");
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <form className={s.form} onSubmit={handleSudmit}>
      <button type="submit" className={s.button}>
        <ImSearch />
      </button>

      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        value={searchQuery}
      />
    </form>
  );
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
