import React from "react";
import HeaderImg from "../assets/Img/HeaderWrapper.png";
import { CiPlay1 } from "react-icons/ci";
const HeaderWrapper = () => {
  return (
    <div className="HeaderWrapper container">
      <div className="HeaderInfo">
        <h1>Work at the speed of thought</h1>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="DivPlay">
          <button>Get started</button>
          <button>
            <span>
              <CiPlay1 />
            </span>
            Watch the Video
          </button>
        </div>
      </div>
      <div className="ImgWrapper">
        <img src={HeaderImg} alt="as" className="HeaderImg" />
      </div>
    </div>
  );
};

export default HeaderWrapper;
