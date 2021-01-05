import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import UserListView from "./UserListView"; 
import { fetchGitUserList ,fetchGitUserRepos ,fetchGitUserinfo } from "../Utils/ApiUtils"
 
 
const SeearchBox = () => {
 const [info, setinfo] = useState({});
 const [username, setUsername] = useState("");
 const [searchResult, setSearchResult] = useState([]);
 const [repos, setRepos] = useState([]);
 

 
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
 
 const handleUserRepos = async() => {
   const res = await fetchGitUserRepos(username)
   setRepos(res)

   const response = await fetchGitUserinfo(username)
   setinfo(response)
  //  debugger
   console.log(res)
 }
 
 console.log("username.....", username)
 console.log("searchResult....", searchResult)
//  debugger
 
 return (
   <>
     <div className="navbar navbar-expand-sm  navbar-dark px-sm-5">
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
       />
     </div>
 
     <button className="button"  onClick={handleUserRepos}>
       {" "}
       SearchUser
     </button>
     <UserListView search={searchResult}/>
     <SearchResult info={info} repositories={repos} />
   </>
 );
};
export default SeearchBox;