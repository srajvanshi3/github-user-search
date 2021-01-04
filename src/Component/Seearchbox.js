import React, { useState } from "react";
import SearchResult from "./SearchResult";

   const SeearchBox = () => {
     const [info, setinfo] = useState({});
    const [username, setUsername] = useState("");
  
    const [avatarUrl , setAvatarUrl] = useState('')
    const [followers, setfollowers] = useState("")
    const [following, setfollowing] = useState("")
      const [repos, setRepos] = useState([]);

  

  const onKeyPressHandler = async( err) => {
    err.preventDefault();

            const info = await fetch(`https://api.github.com/users/${username}`);
   
   
       const jsoninfo = await info.json();
       console.log(jsoninfo)

    const repos = await fetch(`https://api.github.com/users/${username}/repos`);
console.log(repos)

       const jsonrepo= await repos.json();
       console.log(jsonrepo)

      //  if(jsoninfo.message!== "Not Found"){
        setinfo(jsoninfo); 

           setRepos(jsonrepo); 
      //       return <h1>Username not found</h1>
      //     }
    
  }

  const ChangeHandler = (err) => {
    setUsername(err.target.value);
  };
  ;
  return (
    <>
   
   


<nav className="navbar navbar-light bg-light">
  <span className="navbar-brand mb-0 h1">GITHUB</span>
</nav>

<div className="md-form active-pink active-pink-2 mb-3 mt-0">
              <input className="form-control" type="text" placeholder="Type UserName" aria-label="Search"
              value={username}
              onChange={ChangeHandler} />
            </div>
      
            
          
      
          
          <button onClick={onKeyPressHandler}> SearchUser</button>
          <SearchResult info={info} repositories={repos} />
       
    </>
  );
};
export default SeearchBox;

