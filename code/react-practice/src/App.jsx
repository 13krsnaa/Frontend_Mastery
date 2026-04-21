import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './component.jsx';

 



    
 
// NameCard — ek simple component jo naam aur role dikhata hai
function NameCard() {
  return (
    <div style={{ border: "1px solid gray", padding: "16px", borderRadius: "8px" }}>
      <h2>keshav saxena</h2>
      <p>Full Stack Developer</p>
    </div>
  );
}
 

// App component mein use karo
function App() {
  return (
    <div>
      <h1>Meri App</h1>
      <NameCard />   {/* component use kiya */}
      <NameCard />  {/* dobara use kiya — yahi toh reusability hai! */}
      <ProductCard />  
       <ProductCard />   {/* dobara use kiya — yahi toh reusability hai! */}
    </div>
  );
}


export default App;