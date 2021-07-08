import React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import { useHistory } from "react-router-dom";
import "./style.css";
interface Props {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data }) => {
  const history = useHistory();

  const handleDetails = (id: any) => {
    history.push({
      pathname: "/details",
      state: id,
    });
  };
  return (
    <>
      <h1 className="launches__li__heading">SpaceX Application</h1>
      <h6 className="launches__li__subheading">Launches List</h6>
      <div className="launches__sub__div">
        <ul className="launches__ul">
          {data.launches?.map((Obj, ind) => {
            return (
              <li
                className="launches__list"
                key={ind}
                onClick={() => handleDetails(Obj?.flight_number)}
              >
                <h3 className="launches__li__missions__name">
                  {Obj?.mission_name}
                </h3>
                <h5 className="launches__li__flight__number">
                  <span className="launch__flight__number">
                    <span>Flight Number: </span>
                    {Obj?.flight_number}
                  </span>
                  <span className="launch__year">
                    <span>Launch Year: </span>
                    {Obj?.launch_year}
                  </span>
                </h5>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LaunchList;
