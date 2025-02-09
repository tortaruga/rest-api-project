import searchIcon from '/images/search-icon.svg';
import '../filters-styles.css'

export default function Filters({darkMode, filtersData, handleFilters}) {
    return (
        <section className="filters">
            <label htmlFor="search-country" className={darkMode ? 'dark' : ''}>
                <img src={searchIcon} alt="search icon" aria-hidden="true" />
                <input type="text" name="search-country" value={filtersData['search-country']} id="search-country" onChange={handleFilters} placeholder="Search for a country..."/>
            </label>

            <select name="region-filter" value={filtersData['region-filter']} id="region-filter" onChange={handleFilters} className={darkMode ? 'dark' : ''}>
                <option value="placeholder">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </section>
    )
}