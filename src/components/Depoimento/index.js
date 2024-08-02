import React from "react";
import "./style.css"

function Depoimento({name, depoimento}){
  return(
    <div className="card-depoimento">
        <div className="depoimento-info">
        <h3>{name}</h3>
        <blockquote>{depoimento}</blockquote>
        </div>
    </div>
  )
}
export default Depoimento;