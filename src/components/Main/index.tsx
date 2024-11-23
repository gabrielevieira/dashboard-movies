"use client";
import React, { JSXElementConstructor, useEffect } from "react";
import { useListMovies } from "@/hooks/useListMovies";
import { useMultipleWinners } from "@/hooks/useMultipleWinners";
import { useMultipleWinnersForInterval } from "@/hooks/useMultipleWinnersForInterval";
import { useStudiosWinnersForYear } from "@/hooks/useStudiosWinnersForYear";
import SideBarContainers from "../SideBar/containers";
import Header from "../Header";

const Main = (SideBarContainers: JSXElementConstructor<any>) => {
  const {
    respListMovies,
    errorListMovies,
    loadingListMovie,
    searchListMovies,
  } = useListMovies();
  const {
    responseMultipleWinners,
    errosMultipleWinners,
    loadingMultipleWinners,
    searchMultipleWinners,
  } = useMultipleWinners();

  const {
    responseMultipleWinnersInterval,
    errorMultipleWinnersInterval,
    loadingMultipleWinnersInterval,
    searchMultipleWinnersForInterval,
  } = useMultipleWinnersForInterval();

  const {
    responseWinnersForYear,
    errorWinnersForYear,
    loadingWinnersForYear,
    searchStudiosWinnersForYear,
  } = useStudiosWinnersForYear();

  useEffect(() => {
    searchListMovies(), console.log("response", respListMovies);
  }, []);

  return (
    <>
      <Header />
      <SideBarContainers />
    </>
  );
};

export default Main;
