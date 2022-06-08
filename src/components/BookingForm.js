import React from 'react';

const BookingForm = () => {
    return (
        <section class="section-container">
            <h2 class="get-in-touch-1">Planning a wedding or an event?</h2>
            <h2 class="get-in-touch-2">Send your booking request down below!</h2>
            <div class="form-container">
                <div class="form">
                    <form
                        name="wishlist-form"
                        id="wishlist-form"
                        method="post">
                            
                            <input type="hidden" name="form-name" value="wishlist-form" />

                        <ul>
                            <li>
                            <label>
                                Name
                                <input class="input" id="nameInput" required name="name"/>
                            </label>
                            </li>
                    
                            <li>
                            <label>
                                Phone number
                                <input class="input" type="tel" name="phone-number"/>
                            </label>
                            </li>
                    
                            <li>
                            <label>
                                Email
                                <input class="input" type="email" required name="email"/>
                            </label>
                            </li>
    
                            <li>
                            <label>
                                Message
                            </label>
                            <textarea class="message">
                            </textarea>
                            </li>
                    
                            <p class= "terms"></p>
                            <li>
                                <label>
                                    <input required
                                        class="check-box"
                                        type="checkbox"
                                        name="terms"
                                        value="terms"
                                    />
                                    I agree with our <a href="#">Terms and Conditions</a>
                                </label>
                            </li>
                    
                    
                            <p class="newsletter"></p>
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
                            </li>
                    
                            <li>
                                <button class="submit-btn" type="submit">Send</button>
                            </li>
                    
                            <li>
                                <h3 id="thankYou"></h3>
                            </li>
                    
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default BookingForm;
