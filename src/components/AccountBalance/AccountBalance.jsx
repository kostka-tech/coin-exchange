import React from 'react';
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

export default function AccountBalance(props) {
    const buttonText =  props.showBalance? 'Hide Balance' : 'Show Balance'
    return (
        <Section>
            { props.showBalance && <Div>Balance: $ { props.amount }  </Div> }
            <button onClick={props.handleToggleBalance}>{buttonText}</button>
        </Section>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number
}
