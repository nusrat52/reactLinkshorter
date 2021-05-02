import React from "react";
// import Butto from "./button";
// import Select3 from "./section3";
// import Select2 from "./section2";


function Loader() {


    return(<div>
        <svg className="svg d-none" >
        <circle cx="50" cy="50" fill="none" stroke="#102766" strokeWidth="9" r="29" strokeDasharray="42.411500823462205 16.13716694115407">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"/>
        </circle>
        </svg>
        </div>
    )
  
}

export default Loader;




