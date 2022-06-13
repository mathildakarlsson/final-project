import React, { useState } from 'react';

import styled from 'styled-components';

const BookingForm = () => {
        
    const [mailerState, setMailerState] = useState ({
        name: "",
        email: "",
        message: "",
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
        const response = await fetch("http://localhost:8090/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailerState }),
        })
        .then((res) => res.json())
        .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
                alert("Message Sent!");
            } else if (resData.status === "fail") {
                alert("Message failed to send");
            }
        })
        .then(() => {
            setMailerState({
                email: "",
                name: "",
                message: "",
            });
        });
    };


    return (
        <section>
            <h2>Planning a wedding or an event?</h2>
            <h2>Send your booking request down below!</h2>
            <div>
                <div>
                    <form
                        name="wishlistform"
                        id="wishlistform"
                        method="post"
                        action="/success"
                        onSubmit={submitEmail}
                     >    
                           <input type="hidden" name="form-name" value="wishlistform" />
                        <ul>
                            <li>
                            <label class="custom-field">
                                Name
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
                 
                            {/* <li>
                            <label class="custom-field">
                                Phone number
                                <input
                                    type="tel" 
                                    name="phonenumber"
                                    placeholder="telefonnummer"
                                />
                            </label>
                            </li> */}
                 
                            <li>
                            <label class="custom-field">
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
                            <label class="custom-field">
                                Message
                            </label>
                            <textarea
                                placeholder="Skriv ett meddelande här"
                                name="message"
                                value={mailerState.message}
                                onChange={handleStateChange}    
                            >
                            </textarea>
                        </li>
                 
                            {/* <p class= "terms"></p>
                            <li>
                                <label>
                                    <input required
                                        class="check-box"
                                        type="checkbox"
                                        name="terms"
                                        value="terms"
                                    />
                                </label>
                            </li> */}
                    
                 
                            {/* <p class="newsletter"></p>
                            <li>
                                <label>
                                    <input
                                        class="check-box"
                                        type="checkbox"
                                        name="newsletter"
                                        value="newsletter"
                                    />
                                    Sign up for Newsletter
                                </label>
                             </li> */}
                 
                            <li>
                                <FormButton type="submit">Send</FormButton>
                             </li>
                
                 
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default BookingForm;


const FormButton = styled.button`
    width: 55%;
    margin: 15px 0 65px 0;
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
    height: 30px;
    }
`;