import React, { useState } from 'react';
import styled from 'styled-components';

// import Portfolio from './Portfolio';
// import swal from '@sweetalert/with-react';

const Contact = () => {

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        phonenumber: "",
        startdate: "",
        enddate: "",
        message: "",
        // products: {},
    });

    const handleStateChange = (e) => {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });

        // const data = mailerState;
        // data.products = {products}

        const response = await fetch("https://final-project-nsd.herokuapp.com/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailerState }) //data
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    alert("Message Sent!");
                    // swal({
                    //     title: 'Din förfrågan har skickats!',
                    //     text: 'Tack för ditt mail! Vi hör av oss inom kort när vi sett över dina önskemål och tillgänglighet!',
                    //     // icon: 'success',
                    //     button: 'Ok',
                    // });

                } else if (resData.status === "fail") {
                    alert("Message failed to send");
                    // swal({
                    //     title: 'Din förfrågan kunde inte skickas.',
                    //     text: 'Ajdå, något verkar ha gått fel! Kontakta oss gärna direkt på nordicspellsdecor@gmail.com så pratar vi vidare där!',
                    //     // icon: 'success',
                    //     button: 'Ok',
                    // });
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
                    // products: {},
                });
            });
    };


    return (
        // <section>
        //     <Header>Contact Page</Header>
        //     <Portfolio />
        // </section>
        <FormyForm>
            <div>
                <FormHeader>Don't be a stranger!</FormHeader>
                <FormText>Skriv till oss om dina önskemål så återkommer vi inom det närmaste.</FormText>
            </div>
            <Formwrapper>
                <form
                    onSubmit={submitEmail}
                >
                    <div>
                        <ul>
                            <li>
                                <label className="custom-field">
                                    Namn
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="namn"
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
                                        placeholder="telefonnummer"
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
                                        placeholder="email"
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
                                    // required
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
                                    // required
                                    />
                                </label>
                            </li>

                            <li>
                                <label className="custom-field">
                                    Meddelande
                                </label>
                                <textarea
                                    placeholder="Skriv ett meddelande här"
                                    name="message"
                                    maxlength="2000"
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
                        </ul>
                    </div>
                </form>
            </Formwrapper>
        </FormyForm>
    )
};

export default Contact;

// const Header = styled.h1 `
//     padding-top: 100px;
// `

const FormyForm = styled.section`
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
const Formwrapper = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
`

// const FormButtonText = styled.h4`
//     display: flex;
//     justify-content: center;
//     font-size: 20px;
//     font-weight: 400;
//     line-height: 1.8em;
//     padding-bottom: 1rem;
// `

const FormButton = styled.button`
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
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
    /* height: 30px; */
    }
`

;