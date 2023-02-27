import React from "react";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";

import "./header.scss";

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="lc-header">
        <Container maxWidth="xl" className="wrap">
          <Typography variant="h4">
            <Link to="/">橙子前端进阶之路</Link>
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton href="https://github.com/OrangeManLi">
              <GitHubIcon sx={{ color: "var(--lc-c-text-2)" }} />
            </IconButton>
            {/* <Button variant="text" sx={{ color: "var(--lc-c-text-2)" }}>
              英语
            </Button>
            <Button variant="text" sx={{ color: "var(--lc-c-text-2)" }}>
              路线图
            </Button> */}
          </Stack>
        </Container>
      </header>
    );
  }
}

export default HeaderComponent;
