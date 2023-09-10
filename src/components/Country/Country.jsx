/* eslint-disable react/prop-types */
import './Country.css'
// import '../Countries'
import { useState } from 'react';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
  
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false);
    const handleVisited = ()=>{ setVisited(!visited)}
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h4 style={{color: visited ? 'Purple': 'white'}}>Name : {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Coad : {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Visted Flags</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;