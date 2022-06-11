import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
            <AboutHeader>Om oss</AboutHeader>
            <AboutText>
                Att en råkall februarikväll kunde vara så fylld av hopp och förväntan. Bland sömniga trädgårdar och gatlyktors sken växte tanken om ett företag, snällt mot plånboken och miljön, samtidigt drömlikt och modigt i sitt utförande.
                Linnéa florist med förkärlek för naturen och svalkande bad. Caroline, kreatör som trivs med pulsen i staden och förundras av vackra byggnader. Olika, men lika i kärleken för skapandet, frihetslängtan, för färg och form och för att få se glädjen i människors ögon när dröm blir verklighet.
                Vi blev Nordic Spells Decor. Visionen var och förblir, att genom säsongens växter, återbruk av vackra ting och kreativitet få vara Västkustens förmedlare av dekoration till personliga och pintrestvänliga event!
            </AboutText>
        </AboutContainer>
    )
};

export default About;

const AboutContainer = styled.section `

`

const AboutHeader = styled.h1 `
    text-align: center;
    font-weight: 400;
    font-size: 25px;
    margin: 50px;
`

const AboutText = styled.p`
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    margin: 0 25px;
`