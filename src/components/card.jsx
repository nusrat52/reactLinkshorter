import React from 'react'

  
function Card({position, header, content, icon}) {
    return (
        <div className={position + " cardd rounded"}>
            <div className="card__yumuru">
            {icon}
            </div>
            <h1 className="card__header">
                {header}
            </h1>
            <p className="card__text">{content} </p>
        </div>
  )
}

export default Card