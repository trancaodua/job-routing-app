import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import api from "../data/fetchData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";

const CentterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
  },
}));

function Home() {
  const [jobs, setJobs] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJobs(page, q);
      setJobs(data.jobs);
      setPagesTotal(data.pagesTotal);
    };
    fetch();
  }, [page, q]);

  return (
    <Container sx={{ p: 3 }}>
      <Grid container spacing={3} sx={{ mb: 5 }}>
        {jobs.map((job) => (
          <Grid key={job.id} item md={6} xs={12}>
            <JobCard
              id={job.id}
              title={job.title}
              description={job.description}
              skills={job.skills}
            />
          </Grid>
        ))}
      </Grid>
      <CentterPagination
        count={pagesTotal}
        color="primary"
        onChange={(event, value) => {
          setPage(value);
        }}
      />
    </Container>
  );
}

export default Home;
