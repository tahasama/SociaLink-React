import "./online.css";

export const Online = ({ user }) => {
  return (
    <li className="onlinefriend">
      <div className="onlinefriendprofile">
        <img
          src={user.profilePicture}
          //   src="../../assets/person/6.jpeg"
          alt=""
          className="profileimg"
        />
        <span className="profileonline"></span>
      </div>
      <span className="profilename">{user.username}</span>
    </li>
  );
};
