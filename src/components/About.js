import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';

const About = () => {
    const [aboutUsData, setAboutUsData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "aboutUs"] {
                _id,
                title,
                photoOne{
                    photographer,
                    image{
                        asset->{
                            _id,
                            url
                        },
                    },
                },
                photoTwo{
                    photographer,
                    image{
                        asset->{
                            _id,
                            url
                        },
                    },
                },
                photoThree{
                    photographer,
                    image{
                        asset->{
                            _id,
                            url
                        },
                    },
                },
            }`
        )
            .then(data => {
                setAboutUsData(data)
                console.log(data)
            })     
    }, []);

    return (
        <AboutContainer>
                {aboutUsData && aboutUsData.map((aboutUs, index) => (
                    <Wrapper key={index}>
                        <ContentWrapper>
                            <MainHeaderMobile>OUR STORY</MainHeaderMobile>
                            <Image
                                    src={aboutUs.photoOne.image.asset.url}
                                    alt={aboutUs.title}
                            />
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
                        </ContentWrapper>
                        <ContentWrapper>
                            <Image
                                src={aboutUs.photoTwo.image.asset.url}
                                alt={aboutUs.title}
                            />
                            <TextWrapper>
                                <AboutHeaderMobile>Caroline,</AboutHeaderMobile>
                                <AboutHeaderMobile>kreativ designer</AboutHeaderMobile>
                                <AboutHeader><LetterSpan>C</LetterSpan>aroline,</AboutHeader>
                                <AboutHeader>kreativ designer</AboutHeader>
                                <AboutText>
                                    Caroline heter jag och jag är kreativ designer i Nordic Spells Decor. Jag fullkomligt älskar chansen att få ta tag i nya kreativa projekt och låta idéerna flöda! Om du önskar hjälp med att planera dekorationen ditt drömevent eller bara någon att bolla tankar kring dekoration med så finns jag här!
                                </AboutText>
                                <AboutText>
                                    Extra svag är jag för dekoration med attityd och personlighet, för kontraster och för dekoration som förstärker identiteten hos dig som kund! Jag tror starkt på omgivningens kraft att påverka stämningar, så varför inte ge den en extra knuff mot känslan du vill att dina gäster ska minnas när de tänker tillbaka om tio, tjugo år?
                                </AboutText>
                            </TextWrapper>
                        </ContentWrapper>
                        <ContentWrapper>
                            <Image
                                src={aboutUs.photoThree.image.asset.url}
                                alt={aboutUs.title}
                            />
                            <TextWrapper>
                            <AboutHeaderMobile>Linnéa, florist</AboutHeaderMobile>
                            <AboutHeader><LetterSpan>L</LetterSpan>innéa, florist</AboutHeader>
                                <AboutText>
                                    Linnéa heter jag och jag är kreativ designer i Nordic Spells Decor. Jag fullkomligt älskar chansen att få ta tag i nya kreativa projekt och låta idéerna flöda! Om du önskar hjälp med att planera dekorationen ditt drömevent eller bara någon att bolla tankar kring dekoration med så finns jag här!
                                </AboutText>
                                <AboutText>
                                    Extra svag är jag för dekoration med attityd och personlighet, för kontraster och för dekoration som förstärker identiteten hos dig som kund! Jag tror starkt på omgivningens kraft att påverka stämningar, så varför inte ge den en extra knuff mot känslan du vill att dina gäster ska minnas när de tänker tillbaka om tio, tjugo år?
                                </AboutText>
                            </TextWrapper>
                        </ContentWrapper>
                    </Wrapper>
                ))}
        </AboutContainer>
    )
};

export default About;

const AboutContainer = styled.section `

`

const Wrapper = styled.div `
    display: flex;
    padding-top: 90px;
    flex-direction: column;
    margin: 50px;
`

const ContentWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    align-items: center;

    @media (min-width: 668px) {
        width: 70vw;
        justify-content: center;
    }

    @media (min-width: 960px) {
        flex-direction: row;
        margin: 50px 0 0 0;
    }
`

const TextWrapper = styled.div `
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
`

const Image = styled.img `
    width: auto;
    object-fit: contain;
    max-height: 75vh;
    /* margin-top: 50px; */
    
    @media (min-width: 668px) {
        margin: 0 70px;
        max-height: 80vh;
    }

    @media (min-width: 960px) {
        max-height: 90vh;
    }
`

const AboutHeader = styled.h1 `
    align-self: center;
    font-weight: 300;
    font-size: 30px;
    display: flex;
    align-items: baseline;
    display: none;
    font-weight: 200;

    @media (min-width: 960px) {
        font-size: 40px;
        display: flex;
    }
`
const AboutHeaderMobile = styled.h1 `
    font-weight: 300;
    font-size: 40px;
    display: flex;
    align-items: baseline;
    display: flex;
    font-weight: 200;
    /* text-align: center; */
    justify-self: center;
    align-self: center;
    padding-top: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    
    @media (min-width: 960px) {
        display: none;
    }
`

const MainHeaderMobile = styled.h1 `
    font-weight: 300;
    font-size: 40px;
    display: flex;
    align-items: baseline;
    display: flex;
    font-weight: 200;
    padding-bottom: 30px;
    width: auto;
    flex-direction: row;
    letter-spacing: .05em;


    @media (min-width: 960px) {
        display: none;
    }
`

const LetterSpan = styled.div `
    font-size: 45px;
    font-weight: 200;

    @media (min-width: 668px) {
        font-size: 55px;
    }
`

const AboutText = styled.p`
    font-weight: 300;
    margin: 12px 0;
    line-height: 28px;
    padding-top: 15px;
    width: 60vw;
    
    @media (min-width: 668px) {
        font-size: 16px;
        letter-spacing: .03em;
        max-width: 100vw;
    }

    @media (min-width: 960px) {
        max-width: 440px;
    }
`