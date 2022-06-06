import React from 'react';
import { useDispatch } from 'react-redux';
import { wishlist } from '../reducers/wishlist';

const WishListItem = ({ product }) => {
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(wishlist.actions.addItem(product))
    }

    const removeItem = () => {
        dispatch(wishlist.actions.removeItem(product))
    }

    return(
        <article>
                <li>
                    <div>
                        <p>{product.title} x {product.quantity}</p>
                        <p>{product.price * product.quantity} SEK</p>
                        <img className="product-image"
                            src={product.mainImage.asset.url}
                            alt={product.title}
                        />
                    </div>
                    <div>
                        <button
                            className="qty-button"
                            type="button"
                            onClick={removeItem}
                        >
                        -
                        </button>
                        <button
                            className="qty-button"
                            type="button"
                            onClick={addItem} 
                        >
                        +
                        </button>
                    </div>
                </li>
        </article>
    )
};

export default WishListItem;
