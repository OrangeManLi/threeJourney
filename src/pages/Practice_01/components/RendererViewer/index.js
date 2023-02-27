import React, { useEffect, useRef } from "react";
import { animate, mount } from "./renderer";
import "./renderer.scss";

const RendererViewer = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log("初始化来了2", ref.current);
    mount(ref.current);
    animate();
  }, []);
  return <div ref={ref} className="viewer"></div>;
};

export default RendererViewer;
