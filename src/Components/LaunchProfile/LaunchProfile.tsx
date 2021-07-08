import * as React from "react";
import { LaunchProfileQuery } from "../../generated/graphql";
import "./style.css";
import Paper from "@material-ui/core/Paper";

interface Props {
  data: LaunchProfileQuery;
}

const className = "LaunchProfile";
const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }
  return (
    <>
      <div className="Launch__profile">
        <h1 className="heading__mission__name">{data.launch.mission_name}</h1>
        <h6 className="mission__result">
          <span className="mission__result__heading">Mission: </span>
          {data.launch.launch_success ? (
            <span className="mission__success">Successful🚀🙌</span>
          ) : (
            <span className="mission__failed">Failed🚀😭</span>
          )}
        </h6>
        <p className="rocket__name">
          <span>Rocket Name: </span>
          {data.launch.rocket && `${data.launch.rocket.rocket_name}`}
        </p>
        <p className="rocket__type">
          <span>Rocket Type: </span>
          {data.launch.rocket && `${data.launch.rocket.rocket_type}`}
        </p>
        <p className="launch__details">
          <span>Details: </span>
          {data.launch.details}
        </p>
        {!!data.launch.links && !!data.launch.links.flickr_images && (
          <div className="images__div">
            {data.launch.links.flickr_images.map((image) =>
              image ? (
                <img
                  src={image}
                  alt="SPACEX"
                  className="flickr__images"
                  key={image}
                />
              ) : null
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default LaunchProfile;
