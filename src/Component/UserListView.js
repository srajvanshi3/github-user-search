import React from 'react'

function UserListView(props) {

    console.log(".......props" , props.search[0])
    const usersList = props.search
    
    usersList.map((log)=>{
        const loginID= log.login
        console.log("aray..", loginID)
    })

    return (
        <div>
            <h3>search result: </h3>

       {usersList.map((log)=>{
           return (
               <ul>
                
                <li><img src={log.avatar_url} className="user-img"></img> <h3>{log.login}</h3></li>
               
               </ul>
           
           ) 
       })}
        </div>
    )
}

export default UserListView
