export default function CountryCard({flag, name, population, region, capital, handleCardClick, country}) {
    const handleClick = () => {
        handleCardClick(country);
        
    };
    return (
        <div className='country-card' onClick={handleClick}>
            <div className="flag-wrapper">
              <img src={flag} alt="country flag" />
            </div>
            <h1 className="country-name">{name}</h1>
            <p className="population">Population: <span>{population}</span></p>
            <p className="region">Region: <span>{region}</span></p>
            <p className="capital">Capital: <span>{capital}</span></p>
        </div>
    )
}