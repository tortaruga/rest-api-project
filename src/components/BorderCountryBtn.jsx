import { useState, useEffect } from "react";

export default function BorderCountryBtn({code, handleBorderCountryClick, name}) {
    const [allCountries, setAllCountries] = useState([]);

    const getAllCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        async function func() {
            const data = await getAllCountries();
            setAllCountries(data);
        }
        func();
    }, [])

    const country = allCountries.find(country => country.cca3 === code);
    const countryName = allCountries.find(country => country.cca3 === code)?.name.common;
    return (
        <button className="border-country-btn" type="button" onClick={() => handleBorderCountryClick(country)}>
           {countryName ? allCountries.find(country => country.cca3 === code).name.common : ''}
        </button>
    )
}