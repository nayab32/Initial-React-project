// function sum(a, b) {
//   return a + b;
// }

// function operator(a, b, op) {
//   if (op === "+") {
//     return a + b;
//   } else if (op === "-") {
//     return a - b;
//   } else {
//     return a * b;
//   }
// }

// function App() {
//   const userName = "panther"
//   const userobj={
//     name:"iqra nayab",
//     email: "@iqranayab.com",
//     age:21,
//   }
//   const userArray=["ali", "iqra", "ayesha"]
//   let x = 30;
//   let y = 20;
//   let path="https://www.google.com/search?q=animals+pictures+cute&sca_esv=4dd081c4c07b0b1c&sxsrf=APpeQnu_JfxzzHsUALc24-e59p5yJyvMug%3A1786085213167&ei=XX91as_hCc2okdUPzKytuQ0&biw=1280&bih=585&ved=0ahUKEwiPhK319Y2WAxVNVKQEHUxWK9cQ4dUDCBA&uact=5&oq=animals+pictures+cute&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWFuaW1hbHMgcGljdHVyZXMgY3V0ZTILEAAYgAQYigUYkQIyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjCIVDEBFidHnACeAGQAQCYAY4CoAHECqoBBTAuMS41uAEDyAEA-AEBmAIIoALZC8ICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIKEAAYgAQYigUYQ8ICChAAGIAEGBQYhwLCAgcQABiABBgNwgIIEAAYBRgeGA3CAggQABgIGB4YDZgDAIgGAZAGCpIHBTIuMC42oAeSJ7IHAzItNrgHqQvCBwUzLTcuMcgHeYAIAQ&sclient=gws-wiz-serp#sv=CAMSXhoyKhBlLWktZEd6XzlDUnNSMXJNMg5pLWRHel85Q1JzUjFyTToOYUkxYnA5MjZYbld4NU0gBCokCg5wSTYtZkJuNi1LVDZyTRIQZS1pLWRHel85Q1JzUjFyTRgAMAEYByDbw7GsBUoIEAEYASABKAE"

//   return (
//     <div>
//       <h1>{name?name:"user not found"}</h1>
//       <h1>{10 + 45 + 55}</h1>
//       <h1>{x + y}</h1>

//       <button onClick={() => alert("Hello")}>Click</button>

//       <h1>{sum(10, 100)}</h1>
//       <h1>{operator(20, 10, "+")}</h1>
//       <h1>{userobj.email}</h1>
//       <h1>{userArray[1]}</h1>
//       <img 
//       src={path}
//       />
//       <input type="text" valie={name} />
      
//     </div>
//   );
// }

// export default App;

// STATE

// import {useState} from "react";
// import Counter from "./Counter";
// function App(){
//   const [fruit,setfruit]=useState("Apple");
//    const handlefruit=()=>{
//     setfruit("Banana")
//    }
  


//   return(
//     <div>
//      <h1>{fruit}</h1>
//      <button onClick={handlefruit}>Change fruit Name</button>
//      <Counter />
    
//     </div>
//   )
// }

// export default App
import { useState } from "react";
// import User from "./User";

function App(){


  // const {display,setDisplay}=useState(true)
//   return(
//   <div>
    // <h1>Toggle in React js</h1>

    
//     {/* {
//       display? <h1>Iqra Nayab</h1>:null
//     } */}

    //  {
    //   display? <User/> : null
    // }
    // <button onClick={()=>setDisplay(display)}>Toggle</button>
    
//   </div>
//   )
// return(
//   <div>
//     <h1>Toggle in React JS</h1>
//      {
//       display? <User/> : null
//     }
//     <button onClick={()=>setDisplay(display)}>Toggle</button>
//     <h1>App is working!</h1>
//     <User />
//   </div>
// );
// }
const [count,setCount]=useState(3);
return(
<div>
  <h1>{count}</h1>
  <button onClick={()=>setCount(count+1)}>Counter</button>
  {
    count==0?<h1>Condition 0</h1>
    :count==2?<h1>Condition 1</h1>
    :count==3?<h1>Condition 2</h1>
    :count==4?<h1>Condition 3</h1>
    :count==5?<h1>Condition 4</h1>
    :null
  }
</div>
)
}

export default App;