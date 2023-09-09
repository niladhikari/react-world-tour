
import { useEffect, useState } from 'react';
const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
        </div>
    );
};

export default Countries;