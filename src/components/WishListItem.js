import React from 'react';
import { useDispatch } from 'react-redux';
import { wishlist } from '../reducers/wishlist';
import styled from 'styled-components';


const WishListItem = ({ product }) => {
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(wishlist.actions.addItem(product))
    }

    const removeItem = () => {
        dispatch(wishlist.actions.removeItem(product))
    }

    return(
        <Main>
        <ArticleContainer>
            <RentalsContainer>
                <CardContainer>
                <li>
                    <div>
                        <RentalsInfoText>{product.title} x {product.quantity}</RentalsInfoText>
                        <RentalsInfoText>{product.price * product.quantity} SEK</RentalsInfoText>
                        <img className="product-image"
                            src={product.mainImage.asset.url}
                            alt={product.title}
                        />
                    </div>
                    <div>
                        <AddRemoveButton

                            // className="qty-button"
                            // type="button"
                            onClick={removeItem}
                        >
                        -
                        </AddRemoveButton>
                        <AddRemoveButton
                            // className="qty-button"
                            // type="button"
                            onClick={addItem} 
                        >
                        +
                        </AddRemoveButton>
                    </div>
                </li>
                </CardContainer>
                </RentalsContainer>
        </ArticleContainer>
        </Main>
    )
};

export default WishListItem;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`

const ArticleContainer = styled.article`
    padding: 8rem 2rem 0 2rem;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-self: center;
`

const RentalsContainer = styled.div`
@media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
}

@media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr)
}
`

const CardContainer = styled.div`
background-color: white;
width: 55vh;
padding: 1rem 1 rem 1 rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1.5rem;

@media (min-width: 668px) {
    width: 35vh;
    padding: o.5rem 0.5 rem 0.5rem 0;

}
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

const AddRemoveButton = styled.button`
    width: 100%;
    margin: 0.5rem;
    cursor: pointer;
    border: none;
    font-size: 20px;

    padding: 1rem;
    color: black;
    background-color: rgb(197,191,184);
    text-transform: uppercase;
    font-weight: 450;
    
    &:hover {
    background-color: black;
    color: white;
    transition: 0.7s ease;
    /* height: 30px; */
    }
`