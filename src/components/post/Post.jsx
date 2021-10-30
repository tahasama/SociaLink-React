import "./post.css";
import { MoreVert, ThumbUpAlt, Favorite } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [heart, setHeart] = useState("white");
  const [thumb, setThumb] = useState("white");
  const handleLike = () =>
    isLiked
      ? setLike(like - 1) &
        setIsLiked(false) &
        setHeart("white") &
        setThumb("white")
      : setLike(like + 1) &
        setIsLiked(true) &
        setHeart("red") &
        setThumb("blue");

  return (
    <div className="posts">
      <div className="post">
        <div className="posttop">
          <div className="posttopleft">
            <img
              // src="../../assets/person/1.jpeg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postuserimg"
            />
            <span className="posttxt">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postdate">{post.date}</span>
          </div>
          <div className="posttopright">
            <MoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="poscenterttxt">{post?.desc}</span>
          <img
            className="postimg"
            // src="../../assets/post/1.jpeg"
            src={post.photo}
            alt=""
          />
        </div>

        <div className="postbottom">
          <div className="postbottomleft" onClick={handleLike}>
            <ThumbUpAlt
              className="postbottomlefticon"
              htmlColor={thumb}
              style={{ backgroundColor: "#76A0EC " }}
            />
            <Favorite
              className="postbottomlefticon"
              htmlColor={heart}
              style={{ backgroundColor: "#EC8276 " }}
            />
            <span className="likecounter">{like} people liked that</span>
          </div>
          <div className="postbottomright">{post.comment} comments</div>
        </div>
      </div>
    </div>
  );
};
