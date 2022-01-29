import React,{useContext, useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import {Context} from "../Context"
import { Link } from "react-router-dom";
import "./CountryDetail.css"
function CountryDetail(){

    const {countries,theme,filteredData} = useContext(Context)
    const {countryName} = useParams()

    const currentCountry= countries.find(country => ( `${country.cca3}` === countryName ))


    return(
        <div>
            {currentCountry ?
            <div className='container flex'>
                <div className='button-div-main'>
                    <Link to="/"><div className={`${theme}-theme-light button-div`}><i className="ri-arrow-left-line arrow"></i><button className='button'><span>Back</span></button></div></Link>
                </div>
                <div className='details-main'>
                    <div className='image'><img src={currentCountry.flags.svg} /></div>
                    <div className='details-text'>
                        <div className='details-text-col-1'><h2>{currentCountry.name.common}</h2></div>
                        <div className='details-text-col-2'>
                            <div className='details-text-col-2-i'>
                               <div><span className='span-child-head'>Native Name: </span>
                                   <span>{Object.keys(currentCountry.name).includes("nativeName") ? Object.entries(currentCountry.name.nativeName)[0][1].official : "-"}</span>
                               </div>
                               <div><span className='span-child-head'>Population: </span>{currentCountry.population}</div>
                               <div><span className='span-child-head'>Region: </span>{currentCountry.region}</div>
                               <div><span className='span-child-head'>Sub Region: </span>{Object.keys(currentCountry).includes("subregion") ? <span>{currentCountry.subregion}</span> : "-" }</div>

                               <div><span className='span-child-head'>Capital: </span>{Object.keys(currentCountry).includes("capital") ? <span>{currentCountry.capital}</span> : "-" }</div>
                            </div>

                            <div className='details-text-col-2-ii'>
                                <div><span className='span-child-head'>Currencies: </span>{
                                    Object.keys(currentCountry).includes("currencies")  ?
                                    Object.entries(currentCountry.currencies).map(([key, val]) =>
                                        <span key={key}>{val.name},</span>
                                    ) : "-"
                                }
                                </div>

                                <div><span className='span-child-head'>Language: </span>{
                                    Object.keys(currentCountry).includes("languages") ?
                                         Object.entries(currentCountry.languages).map(([key, val]) =>
                                        <span key={key}>{val},</span>
                                    ) : "-"}
                                </div>
                            </div>

                        </div>
                        <div className='details-text-col-3'>
                            <div className='span-child-head border-text'>Borders: </div>
                            <div>
                                {Object.keys(currentCountry).includes("borders") ?
                                Object.entries(currentCountry.borders).map(([key, val]) =>
                                <span key={key}><Link to={`/${val}`}><span className={`${theme}-theme-light border-countries`}>{val}</span></Link></span>) : ""
                                }
                            </div>
                            <div>{}</div>
                            {/* <p>{text.map(text => text.cca3)}</p> */}
                            {/* <p>{hel}</p> */}
                            {/* <div>
                                {Object.keys(currentCountry).includes("borders") ?
                                Object.entries(currentCountry.borders).map(([key, val]) =>
                                {setBorders(key,val)}
                                ) : ""
                                }
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            : <h1>loading</h1> }
        </div>
    )
}

export default CountryDetail