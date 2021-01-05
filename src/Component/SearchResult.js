import React from "react";
import Github from "../Component/github.jpg"

const SearchResult = ({ info , repositories }) => {
  const repoArr = repositories.map((nm)=>nm.name)
  return (
   <div>

<div>
  <img className="card-img"  src={info.avatar_url} alt="Card image cap" />
  <div className="card-body">
    <h3 className="card-title">{info.name}</h3>
    <p className="card-text">{info.bio}</p>
  </div>
</div>

   <h3>Some More Information:-</h3>
<div className="list-group">

  
  <a href="#" className="list-group-item list-group-item-action list-group-item-primary">Followers:{info.followers}</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Following:{info.following}</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-success">location : {info.location}</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-success">HtmlURL : {info.html_url}</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-success">GitHub ID : {info.id}</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">WorkingAt : {info.company}</a>

  
</div>
       
<div>
 <h1>REPOSITORIES:</h1> { repoArr.map((nm, index) => (
        <a><p><h3><img className='git-icon' src={Github}></img> {nm} </h3></p></a>
    ))}
  
</div>
</div>



  );
};

export default SearchResult;

//https://api.github.com/search/users?q=shivam for multiple users
