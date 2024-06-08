import Button from "../Components/Button"
import "./App.css";
import { useState } from "react";
// route for backend data
import user from "../Get/api/user";


const App = ()=>{

  const [darkMode, setDarkMode] = useState(false);
 const  changemode = ()=>{
  darkMode === false? setDarkMode(true) : setDarkMode(false)
 }

  
return <>
<div className={`nav-link  ${darkMode=== false?"White": "Black"}`}>
<header className="header">
<h1 className="logo">My APP</h1>
    <Button changemode = {changemode} />
  </header>
</div>
</>
}
export default App