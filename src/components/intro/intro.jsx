import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Front End Development", "Video Games", "Heavy Metal"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Lee Burnell</h1>
          <h3>
            and I'm interested in <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio" class="portfolio-arrow">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}