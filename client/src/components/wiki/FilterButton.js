const FilterButton = ({genre, handleClick, genre_selected}) => {
  return (
    <button
      className={
        genre_selected === genre
          ? "button_filter button_filter_activate"
          : "button_filter"
      }
      onClick={() => {
        handleClick(genre);
      }}
    >
      {genre}
    </button>
  );
};

export default FilterButton;
