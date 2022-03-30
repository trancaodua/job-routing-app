import React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function SkillsPaper({ skills }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: 0,
      }}
      component="ul"
    >
      {skills?.map((skill) => (
        <ListItem key={skill}>
          <Chip
            size="small"
            color="primary"
            label={skill}
            sx={{ paddingBottom: "2px" }}
          />
        </ListItem>
      ))}
    </Paper>
  );
}

export default SkillsPaper;
