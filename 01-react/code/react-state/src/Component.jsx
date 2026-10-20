import { useState } from "react";

export default function Component() { 
    
   let [count , setCount] = useState(0);
    
    function incCount(){
        setCount ( count + 1);
    }
     return (
        <div>
              <h2> Count = {count}</h2>
              <button onClick= {incCount}> Increase the count </button>
        </div>
      
     );
};