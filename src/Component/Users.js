import React from 'react'
import {Link  } from  "react-router-dom"
import searchResult from "./SearchResult"

function Users(props) {
  
     function handler(index){
    console.log("sdfdsfsdf")
  }
    return (
      
        <div className="card-body"  >
           <div class="card" style={{width: "18rem", padding: "25px" }}>
          <img className="card-img-top" src={props.img} alt="Card image cap" />
          <div className="card-body">
         <h4 className="card-text">{props.id}</h4>
        </div>
          </div>
          </div>
    )
}

export default Users
