import React from "react";
import Butto from "./button";

// let myRef = React.createRef();

export default class Copied extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            should:this.props.p2
        }
    }
     copier = str => {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =            
          document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
          document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
          document.getSelection().addRange(selected);   // Restore the original selection
        }
      };
  // { p1, p2 }
  render() {
    return (
      <div className="copied container-nus bg-light rounded ">
        <p className="m-0 copied__yazi1">{this.props.p1}</p>
        <div className="d-flex copied__sec align-items-center">
          <p className=" copied__yazi2">{this.props.p2}</p>
          <Butto
            url={this.state.should}
            click={this.copier}
            radius="rounded-10 aftered"
            content=""
            active="butto-90"
            eni=""
          />
        </div>
      </div>
    );
  }
}

// export default Copied;
