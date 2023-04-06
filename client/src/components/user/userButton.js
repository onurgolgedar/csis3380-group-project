import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Avatar from "../../assets/avatar.jpg";

const popover = (
  <Popover id="popover-basic"style={{width:"150px"}}>
    <Popover.Header as="h3" style={{backgroundColor:"#FFCEA7", textAlign:"center"}}>Options</Popover.Header>
    <Popover.Body style={{textAlign:"center"}}>
        <NavLink style={{display: "block"}} className="popover-linkItem" to="/user/123">
           Account
        </NavLink>
        <br></br>
        <NavLink style={{display: "block"}} className="popover-linkItem" to="/user/123/favgames">
           Favorite
        </NavLink>
    </Popover.Body>
  </Popover>
);

function UserButton() {
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <button style={{backgroundImage:`url(${Avatar})`}}type="button" className="btn btn-secondary btn-UserProfile">
        
      </button>
    </OverlayTrigger>
  );
}

export default UserButton;
