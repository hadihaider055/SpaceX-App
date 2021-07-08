import * as React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";
import Loading from "../../assets/Spinner-1.gif";
import ErrorImg from "../../assets/404 Page.jpg";
import "./style.css";
const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();
  if (loading) {
    return <img src={Loading} className="launch__list__loader" />;
  }
  if (error || !data) {
    return <img src={ErrorImg} className="launch__list__error" />;
  }
  return <LaunchList data={data} />;
};

export default LaunchListContainer;
