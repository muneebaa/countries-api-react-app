import React,{useContext,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {Context} from "../Context"
import "./Home.css"

function Home(){

  const {handleSearch,filteredData,region,setRegion,theme} = useContext(Context)

  const submit = (event) => {
    console.log('Selected value:', event.target.value);
    setRegion(event.target.value)
  }
     let dispCountries  =filteredData.map(filteredData => (
       <div key={`${filteredData.name.common}`}>
         <Link to={`/${filteredData.cca3}`}>
          <div className={`${theme}-theme-light card`}>
            <div className="card-img">
              <img src={filteredData.flags.svg} />
            </div>
            <div className="card-content">
              <h2>{filteredData.name.common}</h2>
              <div className="card-content-info">
              <p><span className="card-content-info-single">Population:</span> {filteredData.population}</p>
              <p><span className="card-content-info-single">Region:</span> {filteredData.region}</p>
              <p><span className="card-content-info-single capital">Capital:</span> {filteredData.capital}</p>
              </div>
            </div>
          </div>
         </Link>
        </div>
         ))

  return(
    <div>

      <div className="search-option">
        <div className={`${theme}-theme-light search`}>
                <i className="ri-search-line icon-search"></i>
                <input className="input-field" type="text" onChange={(event) =>handleSearch(event)} placeholder="Search for a country..." />
        </div>
        <div className="option" onChange={submit}>
          <select className={`${theme}-theme-light`} id="continents">
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="main-cards" >
        {dispCountries}
      </div>
    </div>
  )
}

export default Home;
