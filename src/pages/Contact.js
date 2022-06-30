import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import sanityClient from '../client.js';


const Contact = () => {
    const [homePage, setHomePage] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "homePage"] {
                _id,
                contactImage{
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
                console.log(data)
            })     
    }, []);

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
    });

    const handleStateChange = (e) => {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    
    const data = mailerState;

    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ data });

        const response = await fetch("https://final-project-nsd.herokuapp.com/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ data }) 
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    swal({
                        title: 'Ditt meddelande har skickats till Nordic Spells Decor!',
                        text: 'Tack för ditt mail, vi hör av oss inom kort!',
                        button: 'Ok',
                    });
                    
                } else if (resData.status === "fail") {
                    swal({
                        title: 'Ditt meddelande kunde inte skickas.',
                        text: 'Ajdå, något verkar ha gått fel! Kontakta oss gärna direkt på nordicspellsdecor@gmail.com så pratar vi vidare där!',
                        button: 'Ok',
                    });
                   
                }
            })
            .then(() => {
                console.log(response)
                setMailerState({
                    name: "",
                    email: "",
                    phonenumber: "",
                    message: "",
                });
            });
    };


    return (
        <Container>
            <FormHeader>Don't be a stranger!</FormHeader>
            <FormText>Skriv till oss om dina önskemål här nedan så återkommer vi inom det närmaste.</FormText>
            {homePage && homePage.map((contact, index) => (
                <div key={index}>
                    <Image
                        src={contact.contactImage.image.asset.url}
                        alt={contact.title}
                    />
                </div>
            ))}
            <FormContainer>
                <Formwrapper>
                    <form onSubmit={submitEmail}>
                        <div>
                            <List>
                                <li>
                                    <label className="custom-field">
                                        Namn
                                        <input
                                            type="text"
                                            name="name"
                                            value={mailerState.name}
                                            onChange={handleStateChange}
                                            required
                                        />
                                    </label>
                                </li>

                                <li>
                                    <label className="custom-field">
                                        Telefonnummer
                                        <input
                                            type="tel"
                                            name="phonenumber"
                                            value={mailerState.phonenumber}
                                            onChange={handleStateChange}
                                        />
                                    </label>
                                </li>

                                <li>
                                    <label className="custom-field">
                                        Email
                                        <input
                                            type="email"
                                            name="email"
                                            value={mailerState.email}
                                            onChange={handleStateChange}
                                            required
                                        />
                                    </label>
                                </li>

                                <li>
                                    <label className="custom-field">
                                        Meddelande
                                    </label>
                                    <textarea
                                        name="message"
                                        maxLength="2000"
                                        rows="10"
                                        value={mailerState.message}
                                        onChange={handleStateChange}
                                    >
                                    </textarea>
                                </li>

                                <li>
                                    <ButtonWrapper>
                                        <FormButton type="submit">Skicka</FormButton>
                                    </ButtonWrapper>
                                </li>

                            </List>
                        </div>
                    </form>
                </Formwrapper>
            </FormContainer>
        </Container>
    )
};

export default Contact;

const Container = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormContainer = styled.section`
    padding-top: 25px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        padding-top: 0;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 100px;
    }
`
 
const List = styled.ul `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.img `
    height: auto;
    object-fit: contain;
    max-width: 80vw;
    
    @media (min-width: 800px) {
        padding-top: 34px;
        max-width: 60vw;
    }
`


const FormHeader = styled.h2 `
    display: flex;
    font-weight: 300;
    font-size: 25px;
    padding-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: .15em;
    padding-top: 150px;
    
    @media (min-width: 668px) {
        text-align: center;
        font-size: 35px;
        letter-spacing: .2em;
        padding-bottom: 0;
        padding-top: 180px;
        justify-content: center;
    }
`

const FormText = styled.p`
    display: flex;
    font-size: 16px;
    font-weight: 305;
    margin: 1rem;
    line-height: 1.8em;
    padding-bottom: 50px;
    text-align: center;

    @media (min-width: 668px) {
        justify-content: center;
    }
`
const Formwrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    flex-direction: column;

    @media (min-width: 668px) {
        margin-top: 0;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const FormButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    margin: 2rem 0;
    cursor: pointer;
    border: none;
    font-size: 16px;
    padding: 1rem;
    color: black;
    background-color: rgb(179,99,90);
    text-transform: uppercase;
    font-weight: 450;
    
    &:hover {
        background-color: black;
        color: white;
        transition: 0.7s ease;
    }
`