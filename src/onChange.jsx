import{useState } from "react";

function OnChange (){
    const [name, setName]=useState("");
    return(
        <>
        <input
        value={name}
        onChange={(e) =>setName(e.target.value)}
        />
        <h2>{name}</h2>
        </>
    );
}
export default OnChange;