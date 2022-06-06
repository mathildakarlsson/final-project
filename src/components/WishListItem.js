import React from 'react';
import { useDispatch } from 'react-redux';
import { wishlist } from '../reducers/wishlist';

const WishListItem = ({ product, id }) => {
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(wishlist.actions.addItem(product))
    }

    const removeItem = () => {
        dispatch(wishlist.actions.removeItem(product))
    }

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
                    onClick={removeItem}
                >
                -
                </button>
                <button
                    type="button"
                    onClick={addItem} 
                >
                +
                </button>
            </div>
        </li>
    )
};

export default WishListItem;