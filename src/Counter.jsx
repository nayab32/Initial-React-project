
import { useState } from "react";

const Counter=()=>{
    const[Count,setCount]=useState(0);
    const [rCounter,setrCounter]=useState(10)
    return (
        <div>
            <h1>Counter:{Count}</h1>
            <h1>r Counter : {rCounter}</h1>
            <button onClick={()=> setCount(Count+1)}>Update Counter</button>

            <button onClick={()=> setrCounter(rCounter-1)}>Update rCounter</button>
        </div>
    );
};
export default Counter;