const FilterButton = ({genre, handleClick, genre_selected}) => {
  return (
    <a
      href="/#"
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
    </a>
  );
};

export default FilterButton;
