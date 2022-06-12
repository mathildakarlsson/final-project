import React from 'react';
import styled from 'styled-components';
import AboutImage from '../assets/About/OURSTORY.jpg'

const About = () => {
    return (
        <AboutContainer>
            <Wrapper>
                <Image src={AboutImage}/>
                <TextWrapper>
                    <AboutHeader><LetterSpan>O</LetterSpan>UR &nbsp;<LetterSpan>S</LetterSpan>TORY</AboutHeader>
                    <AboutText>
                        Att en råkall februarikväll kunde vara så fylld av hopp och förväntan. Bland sömniga trädgårdar och gatlyktors sken växte tanken om ett företag, snällt mot plånboken och miljön, samtidigt drömlikt och modigt i sitt utförande.
                    </AboutText>
                    <AboutText>
                        Linnéa florist med förkärlek för naturen och svalkande bad. Caroline, kreatör som trivs med pulsen i staden och förundras av vackra byggnader. Olika, men lika i kärleken för skapandet, frihetslängtan, för färg och form och för att få se glädjen i människors ögon när dröm blir verklighet.
                    </AboutText>
                    <AboutText>
                        Vi blev Nordic Spells Decor. Visionen var och förblir, att genom säsongens växter, återbruk av vackra ting och kreativitet få vara Västkustens förmedlare av dekoration till personliga och pintrestvänliga event!
                    </AboutText>
                </TextWrapper>
            </Wrapper>
        </AboutContainer>
    )
};

export default About;

const AboutContainer = styled.section `

`

const Wrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

const TextWrapper = styled.div `
    flex-direction: column;
`

const Image = styled.img `
    width: 40%;
    height: 40%;
    margin: 120px 0 30px 140px;
`

const AboutHeader = styled.h1 `
    text-align: center;
    font-weight: 400;
    font-size: 55px;
    margin: 20px 0 20px 40px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-bottom: 40px;
`

const LetterSpan = styled.div `
    font-size: 70px;
`

const AboutText = styled.p`
    font-size: 16px;
    text-align: left;
    font-weight: 300;
    margin: 20px 0 20px 40px;
    line-height: 1.8em;
    width: 40vw;
`