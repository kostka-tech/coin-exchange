import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }
    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                { this.props.showBalance && <Td>{this.props.balance}</Td> }
                <Td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string,
    ticket: PropTypes.string,
    price: PropTypes.number
}
