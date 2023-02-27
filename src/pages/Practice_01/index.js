import React, { useEffect } from "react";
// import { animate } from "./renderer";
import RendererViewer from "./components/RendererViewer";
import "./home.scss";

const Test = () => {
  useEffect(() => {
    console.log("初始化来了2");
    // animate();
  }, []);
  return (
    <div>
      <RendererViewer />
    </div>
  );
};

export default Test;
