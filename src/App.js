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
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 360000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 55000
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.004
        },
        {
          name: 'B Cash',
          ticker: 'BCH',
          price: 0.00004
        }
      ]
    }
  } 
  render() {
    return (
      <Div>
        <Header/>
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
}

export default App;
