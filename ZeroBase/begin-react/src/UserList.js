import React, {useState} from "react";
// 새로운 컴포넌트 만들기, props로 가져오기 
function User({user}){
return(
    <div>
        <b>{user.username}</b><span>({user.email})</span>
    </div>   
    )
}

function UserList({users}){
    return(
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
        }
        
export default UserList;