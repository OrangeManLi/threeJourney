import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import BasicCard from "./components/BasicCard";
// import { animate } from "./renderer";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    console.log("初始化");
    // animate();
  }, []);

  const datas = useMemo(() => {
    return [
      {
        title: "大圣前端进阶指南",
        author: "大圣",
        desc: "解决前端进阶的难点",
        url: "https://shengxinjing.cn/",
      },
      {
        title: "前端进阶之道",
        author: "yck",
        desc: "解决前端进阶的难点",
        url: "https://yuchengkai.cn/",
      },
    ];
  }, []);

  return (
    <div>
      <div className="banner-content">
        <h1>前端学习之路</h1>
        <h2>不断奋斗、不断前进</h2>
      </div>

      <div className="home-content">
        <Button variant="contained">
          <Link to="/practice">练习</Link>
        </Button>
        {/* {datas.map((item) => (
          <BasicCard
            key={item.title}
            title={item.title}
            desc={item.desc}
            author={item.author}
            url={item.url}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
