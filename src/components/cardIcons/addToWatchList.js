import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchListIcon = (e) => {
    e.preventDefault();
    context.addToWatchListIcon(movie);
  };
  return (
    <IconButton aria-label="add to watch List" onClick={handleAddToWatchListIcon}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListIcon;