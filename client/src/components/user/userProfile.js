import "../../css_files/userProfile_style.css";
import Avatar from "../../assets/avatar.jpg";

function UserProfile() {

  return (
    <div class="userP--body">
        <div class="userP--container">
            <div class="userP--avatarContainer card">
                <div class="imgContainer">
                    <img src={Avatar} />
                </div>
            </div>
            <div class="userP--infoContainer card">
                <div class="userP--Heading">
                    <h3>Profile</h3>
                </div>
                <div class="userPInfo-form">
                    <form action="">
                        <div class="inputsContainer">
                            <input type="text" placeholder="Your User Name" required />
                            <input type="email" name="" id="" placeholder="Your Email" required />
                            <input type="text" placeholder="Your Name" required />
                            <input type="text" placeholder="Change Password" />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Tell Us About Yourself" required />
                        <input type="button" name="" value="EDIT" class="btn" />
                        <input type="button" name="" value="LOGOUT " class="btn" />
                        <input type="button" name="" value="DELETE ACCOUNT" class="btn" />
                    </form>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default UserProfile;

