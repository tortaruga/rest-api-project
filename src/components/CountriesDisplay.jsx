import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { useNavigate } from 'react-router-dom';
import '../country-card.css'

export default function CountriesDisplay({darkMode, filtersData, lastFilter}) {
    const navigate = useNavigate();

    const handleCardClick = (country) => {
        navigate('/details/${countryCode}', { state: {country} });
    };

    const [countryCards, setCountryCards] = useState([]);
    const defaultCountries = ['germany', 'usa', 'brazil',
                            'iceland', 'afghanistan', 'Åland%20islands',
                            'albania', 'algeria'];

    const getCountryData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('error fetching data', error);
            return [];
        }
    }

    const generateCountryCards = countries => {
        return countries.map((country, index) => {
            return (
                <CountryCard name={country.name.common}
                    population={country.population} 
                    region={country.region}
                    capital={country.capital}
                    key={index}
                    flag={country.flags.svg}
                    country={country}
                    handleCardClick={handleCardClick}
                    getCountryData={getCountryData}/>
            )
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!filtersData['region-filter'] && !filtersData['search-country']) {
                const countryPromises = defaultCountries.map(country => getCountryData(`https://restcountries.com/v3.1/name/${country}`));
                const data = await Promise.all(countryPromises);
                const combinedCountriesArray = data.flat();
                setCountryCards(generateCountryCards(combinedCountriesArray));
            } else {
                let url;
                if (lastFilter === 'region-filter') {
                    url = `https://restcountries.com/v3.1/region/${filtersData['region-filter']}`;
                } else if (lastFilter === 'search-country') {
                    url = `https://restcountries.com/v3.1/name/${filtersData['search-country']}`;
                }
                const data = await getCountryData(url);
                setCountryCards(generateCountryCards(data));
            }
        }

        fetchData();
    }, [filtersData['region-filter'], filtersData['search-country']]);
    
    return (
        <section className={darkMode ? "countries-display dark" : 'countries-display'}>
            {countryCards}
        </section>
    )
}