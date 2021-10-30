import "./share.css";
import { PhotoLibrary, VideoLibrary, EmojiEmotions } from "@mui/icons-material";

export const Share = () => {
  return (
    <div className="shares">
      <div className="share">
        <div className="sharetop">
          <img src="../../assets/person/1.jpeg" alt="" className="shareimg" />
          <input
            type="text"
            className="shareinput"
            placeholder=" What's on your mind, User !"
          />
          <button className=" sharebutton">Share</button>
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="shareoptions">
            <div className="shareoption">
              <PhotoLibrary className="shareicon1" />
              <span className="sharetext">Photo</span>
            </div>
            <div className="shareoption">
              <VideoLibrary className="shareicon2" />
              <span className="sharetext">Video</span>
            </div>
            <div className="shareoption">
              <EmojiEmotions className="shareicon3" />
              <span className="sharetext">Feeling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
