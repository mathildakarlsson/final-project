import React from 'react';

const BookingForm = () => {
    return (

        <section class="section-container">
            <h2 class="get-in-touch-1">Planning a wedding or an event?</h2>
            <h2 class="get-in-touch-2">Send your booking request down below!</h2>
            <div class="form-container">
                <div class="form">
                    <form
                        name="wishlistform"
                        id="wishlistform"
                     method="post"
                     >
                         
                         
                           <input type="hidden" name="form-name" value="wishlistform" />

                        <ul>
                            <li>
                            <label>
                                Name
                                <input type="text" name="name" required/>
                            </label>
                           </li>
                 
                            <li>
                            <label>
                                Phone number
                                <input type="tel" name="phonenumber"/>
                            </label>
                            </li>
                 
                            <li>
                            <label>
                                Email
                                <input type="email" name="email" required/>
                            </label>
                             </li>
    
                            <li>
                            <label>
                                Message
                            </label>
                            <textarea name="message">
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
                
                 
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default BookingForm;
