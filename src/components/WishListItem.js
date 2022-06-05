import React from 'react';
import { useDispatch } from 'react-redux';
import { wishlist } from '../reducers/wishlist';

const WishListItem = ({ product }) => {
    const dispatch = useDispatch()

    return(
        <li>
            <p>{product.title}</p>
            <div>
                <p>x{product.quantity}</p>
                <p>{product.price * product.quantity} SEK</p>
            </div>

            <div>
                <button
                    type="button"
                    onClick={() => dispatch(wishlist.actions.removeItem(product))}
                >
                -
                </button>
                <button
                    type="button"
                    onClick={() => dispatch(wishlist.actions.addItem(product))}
                >
                +
                </button>
            </div>
        </li>
    )
};

export default WishListItem;