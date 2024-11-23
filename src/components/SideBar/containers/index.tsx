import React, { JSXElementConstructor, useState } from "react";
import SideBarPresentation from "../presentation";
import DashboardContainers from "@/components/Dashboard/containers";
import ListContainers from "@/components/List/containers";

const SideBarContainers = (ListContainers: JSXElementConstructor<any>) => {
  const [openDashBoard, setOpenDashBoard] = useState<boolean>(false);
  const [openList, setOpenList] = useState<boolean>(false);

  const handleDashBoard = () => {
    setOpenDashBoard(true);
    console.log("aqui");
  };

  const handleList = () => {
    setOpenList(true);
  };

  return (
    <>
      <SideBarPresentation
        handleDashBoard={handleDashBoard}
        handleList={handleList}
      />
      {openDashBoard && <DashboardContainers />}
      {openList && <ListContainers />}
    </>
  );
};

export default SideBarContainers;
