import { useState } from "react";

function FormValidation(){
    const [name, setName]= useState("");
    const [error, setError]=useState("");


function handleSubmit(e){
    e.preventDefault();
    if (name===""){
        setError("Name is required");
    }else{
        setError("");
        alert("Form submitted");
    }
}
return(
    <form onSubmit={handleSubmit}>
        <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter name"
        />
        <button type="submit">Submit</button>
        <p>{error}</p>

    </form>
)
}
export default FormValidation;
