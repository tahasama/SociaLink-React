import "./home.css";
import { TopBar } from "../../components/topbar/TopBar";
import { LeftSideBar } from "../../components/leftsidebar/LeftSideBar";
import { Feed } from "../../components/feed/Feed";
import { RightSideBar } from "../../components/rightsidebar/RightSideBar";

export const Home = () => {
  return (
    <>
      <TopBar />
      <div className="home">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </div>
    </>
  );
};
