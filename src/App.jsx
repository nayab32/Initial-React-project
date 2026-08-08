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

import {useState} from "react";
import Counter from "./Counter";
function App(){
  const [fruit,setfruit]=useState("Apple");
   const handlefruit=()=>{
    setfruit("Banana")
   }
  


  return(
    <div>
     <h1>{fruit}</h1>
     <button onClick={handlefruit}>Change fruit Name</button>
     <Counter />
    
    </div>
  )
}

export default App