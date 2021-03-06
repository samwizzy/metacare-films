import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../store/slices/filmsSlice";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import _ from "lodash";
import moment from "moment";
import CharacterList from "./CharacterList";

const Films = () => {
  const dispatch = useDispatch();
  const slice = useSelector(({ films }) => films.films);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  const handleChange = (event, obj) => {
    setSelectedFilm(obj);
  };

  return (
    <div className="container">
      <Autocomplete
        id="star-war-films"
        value={selectedFilm}
        getOptionLabel={(option) => option.title}
        options={_.orderBy(
          slice.results,
          function (o) {
            return moment(o.release_date);
          },
          ["desc"]
        )}
        onChange={(event, newValue) => handleChange(event, newValue)}
        renderInput={(params) => (
          <TextField variant="outlined" {...params} label="Films" />
        )}
      />

      <div className="content">
        <img
          src="https://www.freepnglogos.com/uploads/star-wars-logo-1.png"
          alt="star war logo"
          height="70"
        />

        <marquee>
          <p>{selectedFilm?.opening_crawl}</p>
        </marquee>

        <CharacterList selectedFilm={selectedFilm} />
      </div>
    </div>
  );
};

export default Films;
