import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="coin-type">
        <img alt={currencyName} src={currencyLogo} className="coin-icon" />
        <p className="value">{currencyName}</p>
      </div>
      <div className="currency-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
