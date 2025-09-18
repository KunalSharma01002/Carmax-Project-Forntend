import React from "react";
import { Link } from "react-router-dom";

export default function CarDesign(props) {
  const { vehicleType, imgUrl } = props.item;
  return (
   
      
    <div className="recommend__car-card">
      <div className="recommend__car-top">
        <h5>
          <span>
            <i class="ri-refresh-line"></i>
          </span>
          
        </h5>
      </div>
      <Link to={"/user/ViewVehicle"}>
      <div className="recommend__car-img">
        <img src={imgUrl} alt="" style={{width: '300px',height:'500%'}} />
      </div> </Link>
      <div className="recommend__car-bottom">
        <h4>{vehicleType}</h4>
        <div className="recommend__car-other">
          <div className="recommend__icons">
         
          </div>
          
        </div>
      </div>
    </div>
   
  );
};