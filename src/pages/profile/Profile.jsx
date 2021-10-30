import "./profile.css";
import { TopBar } from "../../components/topbar/TopBar";
import { LeftSideBar } from "../../components/leftsidebar/LeftSideBar";
import { Feed } from "../../components/feed/Feed";
import { RightSideBar } from "../../components/rightsidebar/RightSideBar";

export const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <LeftSideBar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img
                className="profilecoverimg"
                src="../../assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileimage"
                src="../../assets/person/3.jpeg"
                alt=""
              />
            </div>
            <div className="profileinfo">
              <h4 className="prfilename">User Name</h4>
              <span className="profiletxt">hello humans !!!</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed />
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
};
