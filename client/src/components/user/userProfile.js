import "../../css_files/userProfile_style.css";
import Avatar from "../../assets/avatar.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

function UserProfile() {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    handleCheckLogIn();
  }, []);

  const handleCheckLogIn = async () => {
    await axios
      .get("https://gameship.onrender.com/api/users/checklogin")
      .then((response) => {
        console.log(response.data);
        if (!response.data.isLoggedIn) {
          navigate("/");
        } else {
          setProfile(response.data.user);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    await axios
      .post("https://gameship.onrender.com/api/users/logout")
      .then((response) => {
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    await axios
      .delete("https://gameship.onrender.com/api/users/deleteaccount")
      .then((response) => {
          navigate("/");
          window.location.reload(false);
      })
      .catch((error) => console.error(error));
    // navigate("/");
  };

  return (
    <div className="userP--body">
      <div className="userP--container">
        <div className="userP--avatarContainer card">
          <div className="imgContainer">
            <img src={Avatar} />
          </div>
        </div>
        <div className="userP--infoContainer card">
          <div className="userP--Heading">
            <h3>Profile</h3>
          </div>
          <div className="userPInfo-form">
            <ul style={{ color: "white" }}>
              <li style={{ marginBottom: "10px" }}>
                <h3>Username:</h3> <span>{profile.username}</span>
              </li>
              <li>
                <h3>Email:</h3> <span>{profile.email}</span>
              </li>
            </ul>
            <br></br>
            <div>
              <button className="btn-userProfile" onClick={handleLogOut}>
                LOG OUT
              </button>
              <button className="btn-userProfile" onClick={handleDeleteAccount}>
                DELETE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
