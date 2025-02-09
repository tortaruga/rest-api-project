import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BorderCountryBtn from './BorderCountryBtn';
import { useNavigate } from 'react-router-dom';
import '../detail-page-styles.css'

export default function CountryDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [country, setCountry] = useState(location.state?.country || {});

    function handleBackClick() {
        navigate('/');
    }

    function handleBorderCountryClick(newCountry) {
        setCountry(newCountry);
    }

    const borderCountries = country.borders ? country.borders.map((countryCode) => {
        return (
            <BorderCountryBtn key={countryCode} code={countryCode} name={country.name.common} handleBorderCountryClick={handleBorderCountryClick}/>
        )
    }) : 'N/A';

    let currencies = [];
    Object.values(country.currencies).forEach(currency => {currencies.push(currency.name)});

    let languages = [];
    Object.values(country.languages).forEach(language => {languages.push(language)});

    let nativeName = Object.values(country.name.nativeName).at(-1).common;

    return (
        <section className="country-details">
            <button className='back-btn' type='button' onClick={handleBackClick}><div className="arrow-icon" aria-hidden="true"></div> back</button>
            <div className="details-container">
                <div className="flag-wrapper">
                    <img src={country.flags.svg} alt="country flag" />
                </div>
                <div className="info-wrapper">
                    <div className="col left">
                      <h1 className="name">{country.name.common}</h1>
                      <p className="native-name">Native name: <span>{nativeName}</span></p>
                      <p className="population">Population: <span>{country.population}</span></p>
                      <p className="region">Region: <span>{country.region}</span></p>
                      <p className="sub-region">Sub Region: <span>{country.subregion}</span></p>
                      <p className="capital">Capital: <span>{country.capital}</span></p>
                    </div>
                    <div className="col right">
                        <p className="domain">Top Level Domain: <span>{country.tld.join(', ')}</span></p>
                        <p className="currencies">Currencies: <span>{currencies.join(', ')}</span></p>
                        <p className="languages">Languages: <span>{languages.join(', ')}</span></p>
                    </div>
                    <div className="border-countries">
                        <p>Border Countries:</p>
                        <div className="country-btns">
                           {borderCountries}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}