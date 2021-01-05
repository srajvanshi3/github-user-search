export function fetchGitUserList(searhQuery) {
    return fetch(`https://api.github.com/search/users?q=${searhQuery}`, {
      method: "GET",
      // headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `JWT ${auth.getUserToken()}`,
      // }
    })
      .then((res) => res.json())
      .then((respData) => respData)
      .catch((err) => err)
   }
   