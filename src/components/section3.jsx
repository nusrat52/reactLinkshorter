import React from "react";
import Copied from "./copied";

// let  = React.createRef();

function Select3({ arr }) {

// return(<Copied p1="nura bur yazi" p2="burada biri" />)


    return (<React.Fragment>
    {arr.edilmisler.map(element => {
        return (<Copied key={new Date()} p1={element[1]} p2={element[0]} />)
    })}

</React.Fragment>)
}





export default Select3;
