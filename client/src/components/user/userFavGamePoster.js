const UserFavGamePoster = ({handleRemoveFromList, gameArcade}) => {
  return (
    <div className="fav--element">
      <h4 style={{ fontWeight: "bold" }}>{gameArcade.name}</h4>
      <img src={gameArcade.background_image} alt="Game Poster"/>{" "}
      <button
        className="remove--favGame"
        onClick={() => {
          handleRemoveFromList(gameArcade._id);
        }}
      >
        Remove{" "}
      </button>
    </div>
  );
};

export default UserFavGamePoster;
