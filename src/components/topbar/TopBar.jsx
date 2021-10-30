import "./topBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

export const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <span className="logo">SociaLink</span>
      </div>
      <div className="topBarCenter">
        <div className="search">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder=" Looking for a friend ?"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="links">
          <span className="link">Homepage</span>
          <span className="link">Timeline</span>
        </div>
        <div className="icons">
          <div className="icon">
            <Badge badgeContent={4} color="secondary">
              <Person />
            </Badge>
          </div>
          <div className="icon">
            <Badge badgeContent={4} color="secondary">
              <Chat />
            </Badge>
          </div>
          <div className="icon">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </div>
        </div>
        <div>
          <img
            className="profileImage"
            src="../../../assets/person/1.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
