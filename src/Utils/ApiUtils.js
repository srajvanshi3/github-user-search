export function fetchGitUserList(searhQuery) {
    return fetch(`https://api.github.com/search/users?q=${searhQuery}`, {
      method: "GET",
      
    })
      .then((res) => res.json())
      .then((respData) => respData)
      .catch((err) => err)
   }

   export function fetchGitUserRepos(searchQuery){
       return fetch(`https://api.github.com/users/${searchQuery || ""}/repos`)
       .then((res)=>res.json())
       .then((respData) => respData)
       .catch((err) => err)
   }
   
   export function fetchGitUserinfo(searchQuery){
    return fetch(`https://api.github.com/users/${searchQuery || ""}`)
    .then((res)=>res.json())
    .then((respData) => respData)
    .catch((err) => err)
}
