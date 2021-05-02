import React from "react";
import Select3 from "./section3";
import Select2 from "./section2";
import Advanced from "./advanced";
import Loader from "./loader";

// let loader = React.createRef();

function selectMain({ shortener, arr }) {

    return(
    <section className="content2">
        <Select2 shortener={shortener} arr={arr} />
            <Select3 arr={arr} />
            <Loader  />
            <Advanced />

    </section>)
  
}
export default selectMain;




