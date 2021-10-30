import "./leftsidebar.css";
import {
  DynamicFeed,
  School,
  Event,
  WorkOutline,
  BookmarksRounded,
  Group,
  TextsmsOutlined,
  OndemandVideoOutlined,
  ContactSupportOutlined,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import { Friends } from "../friends/Friends";

export const LeftSideBar = () => {
  return (
    <div className="leftsidebar">
      <div className="leftsidebarcontainer">
        <ul className="leftsidebarlist">
          <li className="leftsidebaritem">
            <DynamicFeed className="leftsidebaricon" />
            <span className="textitem">Feed</span>
          </li>
          <li className="leftsidebaritem">
            <OndemandVideoOutlined className="leftsidebaricon" />
            <span className="leftsidebartextitem">Videos</span>
          </li>
          <li className="leftsidebaritem">
            <TextsmsOutlined className="leftsidebaricon" />
            <span className="leftsidebartextitem">Chats</span>
          </li>
          <li className="leftsidebaritem">
            <WorkOutline className="leftsidebaricon" />
            <span className="textitem">Jobs</span>
          </li>
          <li className="leftsidebaritem">
            <Group className="leftsidebaricon" />
            <span className="leftsidebartextitem">Groups</span>
          </li>
          <li className="leftsidebaritem">
            <Event className="leftsidebaricon" />
            <span className="leftsidebartextitem">Events</span>
          </li>
          <li className="leftsidebaritem">
            <School className="leftsidebaricon" />
            <span className="leftsidebartextitem">Courses</span>
          </li>
          <li className="leftsidebaritem">
            <BookmarksRounded className="leftsidebaricon" />
            <span className="leftsidebartextitem">Bookmarks</span>
          </li>
          <li className="leftsidebaritem">
            <ContactSupportOutlined className="leftsidebaricon" />
            <span className="leftsidebartextitem">Questions</span>
          </li>
        </ul>
        <button className="leftsidebarbutton">Show More</button>
        <hr className="leftsidebarhr" />
        <ul className="friendlist">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
