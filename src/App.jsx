import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
import './index.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <>
      <Nav handleDarkMode={handleDarkMode} darkMode={darkMode}/>
      <Main darkMode={darkMode}/>
    </>
  )
}

export default App
