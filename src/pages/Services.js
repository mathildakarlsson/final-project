import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../client.js';


const Services = () => {
    const [homePage, setHomePage] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "homePage"] {
                _id,
                serviceImageOne{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
                serviceImageTwo{
                    image{
                        asset->{
                            url,
                        },
                    },
                },
            }`
        )
            .then((data) => {
                setHomePage(data)
            })     
    }, []);


    return (
        <Section>
            {homePage && homePage.map((service, index) => (
            <InfoContainer>
                <Header>Tjänster</Header>
                <ExtraInfo>För bokningsförfrågningar gällande paketen nedan gå till kontaktformuläret 
                    och skriv ner dina önskemål. Förfrågan är inte bindande.
                    Priserna nedan inkluderar 25% moms.
                    Vid resor utanför Göteborgs kommun tillkommer 18:- per mil.</ExtraInfo>
                <ImageWrapper key={index}>
                    <Image
                        src={service.serviceImageTwo.image.asset.url}
                        alt={service.title}
                    />
                </ImageWrapper>

                <WeddingRentalContainer>
                    <WeddingHeader>Lilla designpaketet bröllop</WeddingHeader>
                    <Info>
                        Skapa ert drömbröllop med lite stöd i den första fasen av bröllopsplaneringen. Vi gör
                        ett besök på vigsel- och festplats under 1,5 h, skapar med grund i era önskemål en
                        personlig dekorationsidé och ni får en moodboard med designexempel som inspiration för
                        dekoreringen av bröllopet.
                    </Info>
                    <PriceInfo>
                        2500:-
                    </PriceInfo>

                    <WeddingHeader>Mellanstora dekorationspaketet bröllop</WeddingHeader>
                    <Info>
                        Vi gör ett besök på vigsel- och festplats under 1,5 h, skapar med grund i era önskemål
                        en personlig dekorationsidé och ni får en moodboard med tankarna som inspiration för
                        dekoreringen av bröllopet.    
                    </Info>
                    <Info>
                        Två ytterligare 1h avstämningar kring dekorationen där vi skapar en tydlig plan för
                        införskaffande och utförandet av dekoreringen. Vi hjälper er med val kring färg, form
                        och material. Ni får med er en personligt skapad checklista att använda när det blir dags.
                        6250:-
                    </Info>
                    <Info>
                        Om så önskas finns möjlighet att lägga till hyrsakspaketet nedan alternativt välja
                        individuella hyrsaker till dess specifika kostnad.
                        Även blomsterarrangemang går att beställa och ni får då en offert av oss att ta ställning till.
                    </Info>

                    <WeddingHeader>Stora dekorationspaketet bröllop</WeddingHeader>
                    <Info>
                        Vi gör ett besök på vigsel- och festplats under 1,5 h, skapar med grund i era önskemål
                        en personlig dekorationsidé och ni får en moodboard med tankarna som inspiration för
                        dekoreringen av bröllopet.
                        Två ytterligare 1h avstämningar kring dekorationen där vi skapar en tydlig plan för
                        utförandet av dekorationen tillsammans. Vi hjälper er med val kring färg, form och
                        material.
                    </Info>

                    <Info>
                        När det är dags för bröllop ingår 8h dekoration av två personer på plats där vi
                        förverkligar dekorationsplanen vi skapat tillsammans med er. Vid behov kan det finnas möjlighet
                        att lägga till extra timmar för en kostnad av 1000:-/h för två personers jobb.
                    </Info>
                    <PriceInfo>
                        15 000:-
                    </PriceInfo>

                    <Info>
                        Om så önskas finns möjlighet att lägga till hyrsakspaketet nedan alternativt välja
                        individuella hyrsaker till dess specifika kostnad. Även blomsterarrangemang går att beställa
                        och ni får då en offert av oss att ta ställning till.
                    </Info>
                </WeddingRentalContainer>

                <ImageWrapper key={index}>
                    <Image
                        src={service.serviceImageOne.image.asset.url}
                        alt={service.title}
                    />
                </ImageWrapper>

                <PartiesContainer>
                    <div>
                        <PartiesHeader>Lilla designpaketet fest/event</PartiesHeader>
                        <PartiesInfo>
                            Designkonsultation till fest och event på plats i lokal under 1h. Vi skapar med grund i
                            era önskemål en personlig dekorationsidé och ni får en moodboard med designideér som inspiration för dekoreringen
                            av festen/eventet.
                        </PartiesInfo>
                        <PriceInfo>
                            1 750:-
                        </PriceInfo>

                        <PartiesHeader>Mellanstora dekorationspaketet fest/event</PartiesHeader>
                        <PartiesInfo>
                            Designkonsultation till fest och event på plats i lokal under 1h. Vi skapar med grund i
                            era önskemål en personlig dekorationsidé och ni får en moodboard med tankarna som inspiration för dekoreringen av festen/eventet.
                            Två ytterligare 1h avstämningar kring dekorationen där vi skapar en tydlig plan för
                            utförandet av dekorationen tillsammans. Vi hjälper er med val kring färg, form och
                            material. Ni får med er en personligt skapad checklista att använda när det blir dags.
                        </PartiesInfo>
                        <PriceInfo>
                            5 250:-
                        </PriceInfo>

                        <PartiesInfo>
                            Om så önskas finns möjlighet att lägga till hyrsakspaketet nedan alternativt välja
                            individuella hyrsaker till dess specifika kostnad. Även blomsterarrangemang går att beställa och ni får då en offert av oss att ta ställning till.
                        </PartiesInfo>

                        <PartiesHeader>Stora dekorationspaketet fest/event</PartiesHeader>
                        <PartiesInfo>
                            Designkonsultation till fest och event på plats i lokal under 1h. Vi skapar med grund i
                            era önskemål en personlig dekorationsidé och ni får en moodboard med tankarna som
                            inspiration för dekoreringen av festen/eventet.
                            Två ytterligare 1h avstämningar kring dekorationen där vi skapar en tydlig plan för
                            utförandet av dekorationen tillsammans. Vi hjälper er med val kring färg, form och
                            material.
                            När det är dags för festen ingår 8h dekoration av två personer på plats där vi
                            förverkligar dekorationsplanen vi skapat tillsammans med er. Vid behov kan det finnas
                            möjlighet att lägga till extra timmar för en kostnad av 1000:-/h för två personers jobb.
                        </PartiesInfo>
                        <PriceInfo>
                            14 250:-
                        </PriceInfo>

                        <PartiesInfo>
                            Om så önskas finns möjlighet att lägga till hyrsakspaketet nedan alternativt välja
                            individuella hyrsaker till dess specifika kostnad. Även blomsterarrangemang går att beställa och ni får då en offert av oss att ta ställning till.
                        </PartiesInfo>
                    </div>
                </PartiesContainer>

                <WeddingRentalContainer>
                    <RentalHeader>Hyrsakspaketet</RentalHeader>
                    <Info>
                        Låna allt du vill från vårt förråd till ditt event. 10 000:-. Som kund hämtar och lämnar du själv själv varorna i Nordic Spells förråd. Val av hyrsaker bokas senast 1,5 månad innan event, efter det kan inte Nordic Spells Decor garantera att hyrasaken finns i lager det specifika datumet.
                        Lånetiden är tre dagar.
                    </Info>
                    <Info>
                        Dekoration av lokal, 1000:-/timme för två personers jobb.
                    </Info>
                    <Info>
                        Specialbeställda dekorationer som skyltar, vimplar och blomsterarrangemang pris efter överenskommelse.
                    </Info>
                </WeddingRentalContainer>
            </InfoContainer>
        ))}
        </Section>
    )
};

export default Services;

const ImageWrapper = styled.div `
    align-items: center;
    justify-content: center;
`

const Image = styled.img `
    height: auto;
    object-fit: contain;
    max-width: 90vw;
    padding-bottom: 50px;

    @media (min-width: 992px) {
    max-width: 60vw;
    }
`

const Section = styled.section `
    display: flex;
    flex-direction: column;
`

const InfoContainer = styled.div `
    padding: 8rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    justify-content: center;
    align-items: center;

    @media (min-width: 668px) {
        width: 800px;
    }

    @media (min-width: 900px) {
        width: 1000px;
        align-self: center;
        background-color: white;
    }
`

const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    padding: 3rem 0;
    font-size: 32px;
    letter-spacing: .15em;

    @media (min-width: 668px) {
        font-size: 37px;
        letter-spacing: .2em;
    }

`

const ExtraInfo = styled.p `
    font-weight: 300;
    margin: 12px 0;
    line-height: 28px;
    padding-bottom: 2rem;

    @media (min-width: 668px) {
        font-size: 16px;
        letter-spacing: .03em;
    }
`

const WeddingHeader = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 23px;
    letter-spacing: .15em;
    max-width: 90vw;

    @media (min-width: 668px) {
        font-size: 30px;
        letter-spacing: .2em;
        padding: 3rem 0 1.5rem 0;
    }

`

const WeddingRentalContainer = styled.div`
    padding: 2rem;
`

const PartiesContainer = styled.div`
    background-color: white;
    padding: 2rem 10rem;

    @media (min-width: 668px) {
        padding: 2rem 5rem;
    }
`

const PartiesHeader = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 23px;
    letter-spacing: .15em;
    background-color: white;
    margin-top: 2rem;
    max-width: 90vw;

    @media (min-width: 668px) {
        font-size: 30px;
        margin: 3rem 0 1.5rem 0;
        letter-spacing: .2em;
    }

`

const Info = styled.h4 `
    font-weight: 300;
    margin: 12px 15px;
    line-height: 28px;
    padding-bottom: 2.5rem;

    @media (min-width: 668px) {
        font-size: 18px;
        letter-spacing: .03em;
        padding-bottom: 1rem;
    }
    
    @media (min-width: 900px) {
        background-color: white;
    }
`

const PriceInfo = styled.h4 `
    font-weight: 400;
    margin: 0;
    line-height: 28px;
    padding-bottom: 2.5rem;

    @media (min-width: 668px) {
        font-size: 20px;
        letter-spacing: .03em;
        padding-bottom: 2.5rem;
    }
    
    @media (min-width: 900px) {
        background-color: white;
    }
`

const PartiesInfo = styled.h4 `
    font-weight: 300;
    margin: 12px 0;
    line-height: 28px;
    padding-bottom: 2.5rem;
    background-color: white;

    @media (min-width: 668px) {
        font-size: 18px;
        letter-spacing: .03em;
        padding-bottom: 1rem;
    }
` 
const RentalHeader = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 25px;
    letter-spacing: .15em;
    padding-top: 2rem;

    @media (min-width: 668px) {
        font-size: 30px;
        letter-spacing: .2em;
    }
`