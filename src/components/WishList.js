import React from 'react';
import { useSelector } from 'react-redux';
import WishListItem from './WishListItem';

const WishList = () => {

    const products = useSelector((store) => store.wishlist.items)
    const totalPrice = useSelector((store) => (
        store.wishlist.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))


    return (
        <section>
            <div>
                <h4>Shopping cart</h4>
                <p>Total: {totalPrice} SEK</p>
            </div>
            <ul>
                {products.map((product) => {
                    return(
                        <WishListItem key={product.id} product={product} />
                    )
                })}
            </ul>
        </section>
    )
};

export default WishList;