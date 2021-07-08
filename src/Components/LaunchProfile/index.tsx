import * as React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import { useLocation } from "react-router-dom";
import LaunchProfile from "./LaunchProfile";
import Loading from "../../assets/Spinner-1.gif";
import "./style.css";

const LaunchProfileContainer = () => {
  const location = useLocation();
  const ids = location.state.toString();
  const { data, loading, error } = useLaunchProfileQuery({
    variables: { id: ids },
  });
  if (loading) {
    return <img src={Loading} className="launch__list__loader" />;
  }
  if (error) return <h2>Error</h2>;
  if (!data) {
    return <h2>Select a flight from Home Page</h2>;
  }
  return <LaunchProfile data={data} />;
};
export default LaunchProfileContainer;
