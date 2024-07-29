import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoData} = props
  return (
    <div className="crypto-sub-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-image"
      />
      <ul className="crypto-list">
        <li className="column-heading-listitem">
          <h1 className="title">Coin Type</h1>
          <div className="currency-titles-container">
            <h1 className="title">USD</h1>
            <h1 className="title">EURO</h1>
          </div>
        </li>
        {cryptoData.map(item => (
          <CryptocurrencyItem key={item.id} cryptoDetails={item} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
