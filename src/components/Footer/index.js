import React from "react";
import Container from "@mui/material/Container";
import "./footer.scss";

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="lc-footer">
        {/* <Container maxWidth="xl">Copyright © 京ICP备2020048529号</Container> */}
        <Container maxWidth="sm">
          聪明出于勤奋，天才在于积累 －－华罗庚
        </Container>
        <Container maxWidth="sm">京ICP备2020048529号-2</Container>
      </footer>
    );
  }
}

export default FooterComponent;
