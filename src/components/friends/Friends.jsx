import "./friends.css";

export const Friends = ({ user }) => {
  return (
    <li className="friend">
      <img
        className="friendimg"
        src={user.profilePicture}
        // src="../../../assets/person/6.jpeg"
        alt=""
      />
      <span className="friendtxt">{user.username}</span>
    </li>
  );
};
