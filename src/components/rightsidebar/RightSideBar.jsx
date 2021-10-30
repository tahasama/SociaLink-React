import "./rightsidebar.css";
import { Online } from "../online/Online";
import { Users } from "../../dummyData";

export const RightSideBar = () => {
  const homeRightBar = () => {
    return (
      <>
        <div className="birthday">
          <img src="../../assets/gifs.png" alt="" className="birthdayimg" />
          <span className="birthdaytxt">
            <b>this user</b> and <b>3 others</b> have a birthday today
          </span>
        </div>
        <div className="social">
          <img src="../../assets/happy.jpg" alt="" className="socialimg" />
          <span className="socialtxt1">Get our app </span>
          <span className="socialtxt2">Stay connected</span>
        </div>
        <h4 className="onlinefriends">Online friends</h4>
        <ul className="onlinefriendslist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfo">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfo">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfo">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightsidebars">
      <div className="rightsidebar">{<ProfileRightbar />}</div>
    </div>
  );
};
