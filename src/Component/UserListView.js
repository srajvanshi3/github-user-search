import React , {useState}from 'react'
import Users from "./Users"
function UserListView(props) {

    const[searchinfo , setSearchInfo] = useState(false)
    const usersList = props.search
    console.log("list of users....." , usersList)
    const userinfo=props.userinfo
    const repositories = props.repositories
    

function handler(index){
   const user =  usersList[index].login
   setSearchInfo(true)
   console.log("my login id is ...." , user)
}
    return (
            <div >
            <div className="container">
                     <div className="row">
            {usersList.map((log , index)=>{
         
             console.log("my index......" , index)
              return (
             <div onClick={()=>{ handler(index) }}> 

         <Users img={log.avatar_url} id={log.login} mapi={index}></Users>
         </div>
         ) 
       
    })}
           
        </div>
        </div>
        </div>
    )
}

export default UserListView


               
