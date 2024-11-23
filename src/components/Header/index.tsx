import React from "react";
import { AppBar, Typography } from "@mui/material";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Frontend React Test
      </Typography>
    </AppBar>
  );
};

export default Header;
