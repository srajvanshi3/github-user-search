import React from "react";

const SearchResult = ({ info , repositories }) => {
  console.log(repositories.map((nm)=>nm.name))
  const repoArr = repositories.map((nm)=>nm.name)
  return (
   <div>

<div className="card" >
  <img className="card-img-top" src={info.avatar_url} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{info.name}</h5>
    <p className="card-text">{info.bio}</p>
  </div>
</div>

<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action">Some More Information:</a>

  
  <a href="#" className="list-group-item list-group-item-action list-group-item-primary">Followers:{info.followers}</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Following:{info.following}</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-success">location : {info.location}</a>
  
</div>
       
<div>
 <h1>REPOSITORIES:</h1> { repoArr.map((nm, index) => (
        <p>{nm} </p>
    ))}
  
</div>
</div>



  );
};

export default SearchResult;