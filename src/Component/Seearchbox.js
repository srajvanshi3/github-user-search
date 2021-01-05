import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";
 
import { fetchGitUserList } from "../utlis/Apiutils"
 
 
const SeearchBox = () => {
 const [info, setinfo] = useState({});
 const [username, setUsername] = useState("");
 const [searchResult, setSearchResult] = useState([]);
 const [repos, setRepos] = useState([]);
 
 const onKeyPressHandler = async (err) => {
   err.preventDefault();
 
   const info = await fetch(`https://api.github.com/users/${username || ""}`);
 
   console.log(info);
   const jsoninfo = await info.json();
   console.log(jsoninfo);
 
   const repos = await fetch(`https://api.github.com/users/${username || ""}/repos`);
   console.log(repos);
 
   const jsonrepo = await repos.json();
   console.log(jsonrepo);
 
   
   setinfo(jsoninfo);
 
   setRepos(jsonrepo);
   
   
 };
 
 const ChangeHandler = (event) => {
   const { value } = event.target
   setUsername(value);
 };
 
 useEffect(() => {
   if(username) {
     async function fetchSearch() {
       const response = await fetchGitUserList(username)
       if(response?.error) {
         alert("invalid search", response.error)
       } else {
         const { items } = response
         setSearchResult(items || [])
         // localStorage.setItem("searchUsers", JSON.parse(items))
       }
     }
 
     fetchSearch()
   }
 },
 [username],)
 
 const handleUserSearch = async() => {
 
   const res = await fetchGitUserList(username)
   debugger
   console.log(res)
 }
 
 console.log("username.....", username)
 console.log("searchResult....", searchResult)
 debugger
 
 return (
   <>
     <div className="header">
       <a href="#default" className="logo">
         <h1>Github</h1>
       </a>
     </div>
 
     <div className="md-form active-pink active-pink-2 mb-3 mt-0">
       <input
         className="input"
         type="text"
         placeholder="Type UserName"
         aria-label="Search"
         value={username}
         onChange={ChangeHandler}
          //onKeyPress={handleUserSearch}
       />
     </div>
 
     <button className="button" onClick={onKeyPressHandler}>
       {" "}
       SearchUser
     </button>
     <SearchResult info={info} repositories={repos} />
   </>
 );
};
export default SeearchBox;