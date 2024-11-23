import React, { FunctionComponent } from "react";
import { MenuItem, MenuList } from "@mui/material";
import { IQuerySibeBarPresentation } from "../IQuerySibeBar";
import styles from "../styles.module.css";

const SideBarPresentation: FunctionComponent<IQuerySibeBarPresentation> = ({
  handleDashBoard,
  handleList,
}) => {
  return (
    <MenuList
      className={styles.menuList}
      id="composition-menu"
      aria-labelledby="composition-button"
    >
      <MenuItem onClick={handleDashBoard}>Dashboard</MenuItem>
      <MenuItem onClick={handleList}>List</MenuItem>
    </MenuList>
  );
};

export default SideBarPresentation;
