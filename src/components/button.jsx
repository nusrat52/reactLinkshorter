import React from 'react'

  
function Button({ content, radius, active, eni, click, url }) {
    if (click) {
        return (
            <button onClick={()=>{click(url)}}  className={"btn butto "+radius +" "+active +" "+eni}>
                {content}
           </button>
        )
   }
    return (
        <button   className={"btn butto "+radius +" "+active +" "+eni}>
            {content}
       </button>
    )
}

export default Button
