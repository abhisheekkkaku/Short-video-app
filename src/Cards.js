import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Cards = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="row m-4 my-4 p-0 ">
      <div className="col-5 my-2">
        <div className="card2 my-1">
          <div className="wrapper">
            <div className="logo">
              <img
                            src="data:image/png;base64,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"
                            alt="" 
                        />
            </div>

            <div className="text-center  name">vidMax</div>
            <form className="p-0 ">
              <div className="form-field  align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Username"
                />
              </div>
              <div className="form-field d-flex align-items-left">
                <span className="fas fa-key"></span>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-primary my-3">Login</button>
            </form>

            <div className="text-center fs-6">
              <a href="#">Forget password?</a> or <a href="#">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
