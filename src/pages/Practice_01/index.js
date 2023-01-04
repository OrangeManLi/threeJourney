import React, { useEffect } from "react";
import { animate } from "./renderer";
import "./home.scss";

const Test = () => {
  useEffect(() => {
    console.log("初始化来了2");
    animate();
  }, []);
  return <div>看吧1111</div>;
};

export default Test;
