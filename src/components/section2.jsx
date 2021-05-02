import React from "react";
import Butto from "./button";
// import Select3 from "./section3";

let myRef = React.createRef();

function Select2({ shortener, arr }) {
  if (arr.bosString[0] === 0) {
    return (
      <div className="contemt2__wrapper">
        <div className="content2-inekli container-nus">
          
          <div className="content2-main">
            <input
              ref={myRef}
              type="text"
              placeholder="Shorten a link here"
              className="content2__input"
            />
            <Butto
              url={myRef}
              click={shortener}
              content="Get Started"
              radius="rounded-10"
              active=""
              eni="Butto-bigger"
            />
                    </div>
                </div>
            </div>
        
    );
  } else if (arr.bosString[0] === 1) {
    return (
  
        <div className="contemt2__wrapper">
          <div className="content2-inekli container-nus">
          <div className="content2-main">
            <input
              ref={myRef}
              type="text"
              placeholder="Shorten a link here"
              className="content2__input input-error"
            />
            <Butto
              url={myRef}
              click={shortener}
              content="Get Started"
              radius="rounded-10"
              active=""
              eni="Butto-bigger"
            />
                    </div>
                    <p className="content2__err">{arr.bosString[1]}</p>
                </div>
        </div>
    );
  }
}

export default Select2;
