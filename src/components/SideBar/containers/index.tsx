import React, { useState } from "react";
import SideBarPresentation from "../presentation";
import DashboardContainers from "@/components/Dashboard/containers";
import ListPresentation from "@/components/List/presentation";
import { Container } from "@mui/material";

const SideBarContainers = () => {
  const [openDashBoard, setOpenDashBoard] = useState<boolean>(false);

  const handleDashBoard = () => {
    setOpenDashBoard(true);
  };

  const handleList = () => {
    setOpenDashBoard(false);
  };

  return (
    <>
      <SideBarPresentation
        handleDashBoard={handleDashBoard}
        handleList={handleList}
      />
      <Container>
        {openDashBoard ? <DashboardContainers /> : <ListPresentation />}
      </Container>
    </>
  );
};

export default SideBarContainers;
