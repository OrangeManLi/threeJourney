import React from "react";
// import BottomNavigation from 'components/BottomNavigation';

class LayoutComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container">{this.props.children}</div>
        1111
      </div>
    );
  }
}

export default LayoutComponent;
