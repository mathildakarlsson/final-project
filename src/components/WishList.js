import React from 'react';
import { useSelector } from 'react-redux';
import BookingForm from './BookingForm';
import WishListItem from './WishListItem';

const WishList = () => {

    const products = useSelector((store) => store.wishlist.items)
    const totalPrice = useSelector((store) => (
        store.wishlist.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))

    return (
        <section className="wishlist">
            <h4>Wishlist</h4>
            <ul className="wishlist-ul">
                {products.map((product, index) => {
                    return(
                        <WishListItem key={index} product={product} />
                    )
                })}
            </ul>
            <p className="total">Total cost: {totalPrice} SEK</p>
            <BookingForm />
        </section>
    )
};

export default WishList;
