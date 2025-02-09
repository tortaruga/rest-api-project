import Filters from "./Filters";
import CountriesDisplay from "./CountriesDisplay";
import { useState } from "react";
import CountryDetails from "./CountryDetails";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


function Layout({darkMode}) {
    const location = useLocation();

    const [filtersData, setFiltersData] = useState({
            'search-country': '',
            'region-filter': ''
        })
    const [lastFilter, setLastFilter] = useState('');
    
        function handleFilters(e) {
            const {name, value} = e.target;
            setFiltersData(prevData => {
                return {
                    ...prevData,
                    [name]: value
                }
            })
            setLastFilter(name)
        }
    
    return (
        <>
        <main className={darkMode ? 'dark' : ''}>
            {location.pathname === '/' && <Filters darkMode={darkMode} filtersData={filtersData} handleFilters={handleFilters} />}
                <Routes>
                    <Route path="/" element={<CountriesDisplay darkMode={darkMode} filtersData={filtersData} lastFilter={lastFilter} />} />
                    <Route path="/details/:countryCode" element={<CountryDetails />} />
                </Routes>
        </main>
        </>

    )
}

export default function Main({ darkMode }) {
    return (
       <Router>
        <Layout darkMode={darkMode}/>
       </Router>
    )
}