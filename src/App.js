import './App.css';
import logo from './logo.svg'
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo"></img>
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <table className="coin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Coin name="Bitcoin" ticker="BTC" price={34000.00} />
            <Coin name="Ethereum" ticker="ETH" price={980.00} />
            <Coin name="Tether" ticker="USDT" price={1.01} />
            <Coin name="Ripple" ticker="XRP" price={0.69} />
          </tbody>
      </table>
    </div>
  );
}

export default App;
