import React,{ useContext} from "react";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import {Context} from "./Context"

function App(){
    const {theme, toggleTheme} = useContext(Context)
  return(
    <div>
      <nav className={`${theme}-theme-light navigation`}>
        <h3>Where in the world</h3>
        <button onClick={toggleTheme} className="mode-main">
           {theme === "light" ? <i className="ri-sun-line icon-mode"></i> : <i className="ri-moon-line icon-mode"></i>}
            {theme === "light" ? <p className="mode">Light Mode</p> : <p className="mode">Dark Mode</p>}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<CountryDetail />} />
      </Routes>
    </div>
  )
}

export default App;
