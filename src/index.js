import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutComponent from "components/Layout";
import Home from "src/pages/Home";
import Practice_01 from "src/pages/Practice_01";

import "./pages/test.scss";

const App = () => (
  <div>
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice_01" element={<Practice_01 />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
