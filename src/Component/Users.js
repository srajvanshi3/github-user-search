import React from 'react'

function Users(props) {

    return (
        <div className="card-body">
               <div class="card" style={{width: "18rem", padding: "25px" }}>
  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-text">{props.id}</h4>
  </div>
        </div>
        </div>
    )
}

export default Users
