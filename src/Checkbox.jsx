import { useState } from "react" ;
function Checkbox (){
    const [checked , setChecked]=
    useState(true);
    return(
        <>
        <input 
        type="checkbox"
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
        />
        <h2>{checked ? "yes":"Not Checked"}</h2>

        </>
    );
}
export default Checkbox;