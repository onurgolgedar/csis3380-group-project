import "../css_files/sectionArcade_style.css";
import { NavLink, Outlet } from "react-router-dom";

const SectionArcade = () => {
  return (
    <div>
      <section className="sectionArcade--body" id="sectionArcade">
        <div className="sectionArcade--mainText">
          <h2>
            Our<span>Games</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            perferendis a aliquid quia dolorem officiis enim dicta soluta
            temporibus ipsam, accusamus laudantium nihil, eum commodi est iusto
            eaque sed repellendus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Est autem rerum enim odit, non sint voluptate
            temporibus sed, cumque itaque tempore incidunt eum doloribus odio
            reiciendis, maiores saepe corporis magni?
          </p>
        </div>

        {/* Testing NavLink */}
        <NavLink to={"123/description"}>Single Game</NavLink>
        <div className="sectionArcade--mainContent"></div>
        {/* Dont remove the outlet */}
      <Outlet />
      </section>

      
    </div>
  );
};

export default SectionArcade;
