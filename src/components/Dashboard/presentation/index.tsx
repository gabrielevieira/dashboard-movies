import * as React from "react";
import Grid from "@mui/material/Grid2";
import styles from "./styles.module.css";
import TableMultipleWin from "../TableMultipleWin";
import TableStudiosWin from "../TableStudiosWin";
import TableProducersIntervalWin from "../TableProducersIntervalWin";
import TableListMovie from "../TableListMovie";

const DashboardPresentation = () => {
  return (
    <>
      <Grid container spacing={2} className={styles.grid}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TableMultipleWin />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TableStudiosWin />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TableProducersIntervalWin />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TableListMovie />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPresentation;
