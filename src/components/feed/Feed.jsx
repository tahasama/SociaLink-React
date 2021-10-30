import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export const Feed = () => {
  return (
    <div className="feeds">
      <div className="feed">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
