import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AuthContext from "../auth/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import SkillsPaper from "./SkillsPaper";

function JobCard({ description, skills, id, title }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  const hanleClick = (event) => {
    if (auth.user) {
      navigate(`/job/${id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <SkillsPaper skills={skills} />
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/job/${id}`} state={{ backgroundLocation: location }}>
          <div>Learn More</div>
        </Link>
      </CardActions>
    </Card>
  );
}

export default JobCard;
