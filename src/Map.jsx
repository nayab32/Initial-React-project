import{useState } from "react";

function Map (){
    const fruits = ["Apple","Mango","banana"];
    
    return(
        <>
        {fruits.map((fruit)=>(
            <h2>{fruit}</h2>
        ))}
        </>
    );
}
export default Map;