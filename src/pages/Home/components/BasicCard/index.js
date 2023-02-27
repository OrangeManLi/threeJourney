import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./style.scss";

export default function BasicCard(props) {
  const {
    desc = "Word of the Day",
    title = "be{bull}nev{bull}o{bull}lent",
    author = "adjective",
    tips = "javascript",
    url = "#",
  } = props;
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {tips}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
