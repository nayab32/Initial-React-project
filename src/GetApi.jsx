import { useEffect, useState } from "react";
function GetApi(){
    const[user, setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data));
    }, []);
    return(
        <div>
            <h2>Users</h2>
            {user.map((user)=>(
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}
export default GetApi;