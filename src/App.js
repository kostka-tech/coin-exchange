import React, { Component } from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: #144957;
  color: #cccccc;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 360000,
          balance: 25
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 55000,
          balance: 10
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1,
          balance: 1000000
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.004,
          balance: 0
        },
        {
          name: 'B Cash',
          ticker: 'BCH',
          price: 0.00004,
          balance: 0
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggleBalance = this.handleToggleBalance.bind(this);
  }
  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map(function ({ticker, name, price, balance}) {
      let newPrice = price;
      if (valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        balance,
        price: newPrice
      }
    });
    this.setState({ coinData: newCoinData });
  } 
  handleToggleBalance() {
    this.setState({ showBalance: !this.state.showBalance });
  }
  render() {
    return (
      <Div>
        <Header/>
        <AccountBalance amount={this.state.balance} 
                        handleToggleBalance={this.handleToggleBalance}
                        showBalance={this.state.showBalance} />
        <CoinList coinData={this.state.coinData} 
                  handleRefresh={this.handleRefresh} 
                  showBalance={this.state.showBalance}/>
      </Div>
    );
  }
}

export default App;
