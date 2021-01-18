import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

const Div = styled.div`
    float: left;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText =  this.props.showBalance? 'Hide Balance' : 'Show Balance'
        return (
            <Section>
                { this.props.showBalance && <Div>Balance: $ { this.props.amount }  </Div> }
                <button onClick={this.props.handleToggleBalance}>{buttonText}</button>
            </Section>
        )
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number
}
