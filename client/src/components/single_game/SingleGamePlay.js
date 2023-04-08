import { Route } from "react-router-dom";
import "../../css_files/sectionArcade_style.css";
import { useEffect } from "react";

const SingleGamePlay = ({ data }) => {
  useEffect(() => {
    console.log("Component mounted for the first time");

    GameMaker_Init();

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
      <canvas id="canvas" width="800" height="600">
        <p>Your browser doesn't support HTML5 canvas.</p>
      </canvas>
  );
};

export default SingleGamePlay;
