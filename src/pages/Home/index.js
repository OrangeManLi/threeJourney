import React, { useEffect } from "react";
import { animate } from "./renderer";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    console.log("初始化");
    animate();
  }, []);
  return <div>看吧</div>;
};

export default Home;
