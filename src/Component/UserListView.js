import React from 'react'
import Users from "./Users"
function UserListView(props) {

    const usersList = props.search
    
    // usersList.map((log)=>{
    //     const loginID= log.login
    //     console.log("aray..", loginID)
    // })

    return (
        <div>
            <div className="container">
                     <div className="row">
{usersList.map((log , index)=>{
         
         
         return (

         <Users img={log.avatar_url} id={log.login}></Users>
         ) 
       
    })}
           
        </div>
        </div>
        </div>
    )
}

export default UserListView


               
//     </div>





//     <div>
//         <h3>search result: </h3>

//    {usersList.map((log , index)=>{
//        return (
//          <Users img={log.avatar_url} id={log.login}></Users>
//                    ) 
//    })}
//     </div>