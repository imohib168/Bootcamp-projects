import React from 'react';
import { Heading, Wrapper, Made } from './Header.styles';

const Header = () => {
    return (
        <Wrapper>
            <Heading>Expense Tracker</Heading>
            <Made>Made By Mohib Ismail</Made>
        </Wrapper>
    )
}

export default Header;
