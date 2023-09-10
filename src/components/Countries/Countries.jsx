import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

//   this function for visited country 
  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  //   this function for visited flags 
  const handleVisitedFlags = (flags)=>{
        console.log('flags');
        const newFlags = [...visitedFlags,flags];
        setVisitedFlags(newFlags)
  }

  return (
    <div>
      <h2>Countries : {countries.length}</h2>
       {/* visited country */}
      <div>
        <h5>Visited Countries : {visitedCountry.length}</h5>
        <ul>
            {
                visitedCountry.map((country)=> <li key={country.ccn3}>{country.name.common}</li>)
            }
        </ul>
      </div>
       {/* visited flags */}
      <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
       {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
