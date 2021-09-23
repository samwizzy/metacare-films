import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../store/slices/filmsSlice";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Films = () => {
  const dispatch = useDispatch();
  const slice = useSelector(({ films }) => films.films);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  const handleChange = () => (event, obj) => {
    // setSelectedFilm()
    console.log(event, "event");
    console.log(obj, "obj");
  };

  console.log(slice, "slice");

  return (
    <div className="container">
      <Autocomplete
        id="star-war-films"
        value={selectedFilm}
        getOptionLabel={(option) => option.title}
        options={slice.results}
        onChange={(event, newValue) => handleChange(event, newValue)}
        renderInput={(params) => (
          <TextField variant="outlined" {...params} label="Films" />
        )}
      />
    </div>
  );
};

export default Films;
