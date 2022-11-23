import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import WishListItem from '../components/WishListItem';
import swal from 'sweetalert';
import Loading from '../components/Loading'

import Accordion from "../components/Accordion";
import { accordionData } from "../components/data";

const BookingForm = () => {
    const products = useSelector((store) => store.wishlist.items)
    const totalPrice = useSelector((store) => (
        store.wishlist.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))
        
    const [mailerState, setMailerState] = useState ({
        name: "",
        email: "",
        phonenumber: "",
        startdate: "",
        enddate: "",
        message: "",
        products: {},
    });

    const [isLoading, setIsLoading] = useState(false)

    const handleStateChange = (e) => {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    } 

    const submitEmail = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        console.log({ mailerState });

        const data = mailerState;
        data.products = {products}

        const response = await fetch("https://final-project-nsd.herokuapp.com/send2", {
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
            
            setIsLoading(false)
            
            if (resData.status === "success") {
                swal({
                    title: 'Din förfrågan har skickats till Nordic Spells Decor!',
                    text: 'Tack för ditt mail! Vi hör av oss inom kort när vi sett över dina önskemål och tillgänglighet!',
                    button: 'Ok',
                });
                // alert('Din förfrågan har skickats till Nordic Spells Decor.\nTack för ditt mail!\nVi hör av oss inom kort när vi sett över dina önskemål och tillgänglighet!')
                // setMailerState(true) //den här fungerade aldrig
                // window.location.reload();

            } else if (resData.status === "fail") {
                swal({
                    title: 'Din förfrågan kunde inte skickas.',
                    text: 'Ajdå, något verkar ha gått fel! Kontakta oss gärna direkt på nordicspellsdecor@gmail.com så pratar vi vidare där!',
                    button: 'Ok',
                });
                // alert('Din förfrågan kunde inte skickas.\nAjdå, något verkar ha gått fel!\nKontakta oss gärna direkt på nordicspellsdecor@gmail.com så pratar vi vidare där!')
            }
        })
        .then(() => {
            console.log(response)
            setMailerState({
                name: "",
                email: "",
                phonenumber: "",
                startdate: "",
                enddate: "",
                message: "",
                products: {},
            });
        });
    };


    return (
        <FormContainer>
            <FormHeader>SKICKA IN DIN ÖNSKELISTA</FormHeader>
            <FormText>Skriv till oss om dina önskemål så återkommer vi inom det närmaste. Förfrågan är inte bindande.</FormText>
            <Formwrapper>
                <form onSubmit={submitEmail}>
                    <div>
                        <ul>
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
                                    Från
                                    <input
                                        type="date"
                                        name="startdate"
                                        value={mailerState.startdate}
                                        onChange={handleStateChange}
                                        required
                                    />
                                </label>
                            </li>

                            <li>
                                <label className="custom-field">
                                    till
                                    <input
                                        type="date"
                                        name="enddate"
                                        value={mailerState.enddate}
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
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    required
                                />
                                <label className="custom-field-checkbox">
                                    Jag accepterar personuppgiftspolicyn.
                                </label>
                            </li>

                            <ul className="accordion">
                                {accordionData.map(({ heading, content }) => (
                                    <Accordion heading={heading} content={content} />
                                ))}
                            </ul>

                            <li>
                                <ButtonWrapper>
                                    <FormButton type="submit">Skicka</FormButton>
                                </ButtonWrapper>
                            </li>
                        </ul>
                    </div>
                </form>
            </Formwrapper>

            <Formwrapper>
                {isLoading ? (
                    <Loading />
                ) : (
                    <p> </p>
                )}
            </Formwrapper>

            <section>
                <Container>
                    <RentalsTextContainer>
                        <RentalsInfoText>Total kostnad inkl. moms: {totalPrice} SEK</RentalsInfoText>
                    </RentalsTextContainer>
                    <div>
                        <FormProducts>
                            {products.map((product, index) => {
                                return (
                                    <WishListItem key={index} product={product} />
                                )
                            })}
                        </FormProducts>
                    </div>
                </Container>
            </section>
        </FormContainer>
    )
};

export default BookingForm;

const FormContainer = styled.section`
    padding-top: 8rem;
    
    @media (min-width: 768px) {
        padding-top: 10rem;
    }
`

const FormHeader = styled.h2 `
    display: flex;
    justify-content: center;
    font-weight: 300;
    font-size: 25px;
    padding-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: .15em;
    margin: 1rem 0px 0 3rem;

    @media (min-width: 668px) {
        font-size: 35px;
        letter-spacing: .2em;
      }
`
const FormText = styled.p`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 305;
    margin: 1rem 0px 0 3rem;
    line-height: 1.8em;
    padding-bottom: 1rem;
`
const Formwrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
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
    margin: 2rem 0 2rem 0;
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

const Container = styled.article `
    display: flex;
    justify-content: center;
    width: auto;
    flex-direction: column;
`

const RentalsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    background-color: white;
`

const RentalsInfoText = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: .15em;
    background-color: white;

    @media (min-width: 668px) {
        font-size: 15px;
        letter-spacing: .2em;
    }
`

const FormProducts = styled.ul `
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }

`