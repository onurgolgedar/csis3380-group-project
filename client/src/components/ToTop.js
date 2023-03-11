import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector('body').scrollTo(0,0)
    window.scrollTo(0,0)
  }, [pathname])

  return null;
}

export default ToTop;