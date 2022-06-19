import React from 'react';
import styled from 'styled-components';

import Portfolio from './Portfolio';

const Contact = () => {
    return (
        <section>
            <Header>Contact Page</Header>
            <Portfolio />
        </section>
    )
};

export default Contact;

const Header = styled.h1 `
    padding-top: 100px;
`