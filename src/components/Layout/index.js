import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

import "./layout.scss";

class LayoutComponent extends React.Component {
  render() {
    return (
      <div className="lc-layout">
        <Header />
        <div className="lc-container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default LayoutComponent;
