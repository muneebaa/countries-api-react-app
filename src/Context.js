import React, {useState, useEffect} from "react"

const Context = React.createContext()

function  ContextProvider({children}) {

  const [countries , setCountries] = useState([]);
  const [filteredData,setFilteredData] = useState(countries);
  const [region, setRegion] = useState("all")
  let api = `https://restcountries.com/v3.1/region/${region}`
  const [theme, setTheme] = useState("light")

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(countries)
    result = countries.filter((data) => {
    return data.name.common.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  }


    function toggleTheme() {
        setTheme(prevTheme => {
            return prevTheme === "dark" ? "light" : "dark"
        })
        theme === "light" ? document.body.style = 'background-color: hsl(207, 26%, 17%); color:white': document.body.style = 'background-color: hsl(0, 0%, 98%); color:black';
    }



  useEffect(()=>{
      if(region === "all"){
          api = `https://restcountries.com/v3.1/all`
      }
    fetch(api)
      .then(res => res.json())
      .then(data => {
          setCountries(data)
          setFilteredData(data)
      })
  },[region])


  return (
        <Context.Provider value={{
            handleSearch,
            filteredData,
            region,
            setRegion,
            countries,
            theme,
            toggleTheme
        }}>
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}