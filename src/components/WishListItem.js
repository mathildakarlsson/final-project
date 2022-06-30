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
            {/* <ArticleContainer> */}
            <CardContainer>
                <div>
                    <Image
                        src={product.mainImage.asset.url}
                        alt={product.title}
                    />
                    <RentalsInfoText>{product.title}</RentalsInfoText> 
                    <RentalsInfoText>x {product.quantity}</RentalsInfoText>
                    <RentalsInfoText>{product.price * product.quantity} SEK/dag</RentalsInfoText>
                </div>
                <ButtonWrapper>
                    <AddButton onClick={addItem}>+ Lägg till</AddButton>
                    <RemoveButton onClick={removeItem}>- Ta bort</RemoveButton>
                </ButtonWrapper>
            </CardContainer>
            {/* </ArticleContainer> */}
        </Main>
    )
};

export default WishListItem;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`
const CardContainer = styled.div`
    background-color: white;
    width: 70vw;
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    padding-top: 1rem;
    text-align: center;
    align-self: center;

    @media (min-width: 668px) {
        width: 30vw;
        max-height: 400px;
    }
    
    @media (min-width: 1100px) {
        width: 25vw;
    }
`
const Image  = styled.img `
    object-fit: cover;
    width: 150px;
    height: 150px;
    background-color: white;
`
const RentalsInfoText = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 15px;
    letter-spacing: .15em;
    background-color: white;

    @media (min-width: 668px) {
        font-size: 15px;
        letter-spacing: .2em;
    }
`

const ButtonWrapper = styled.div `
    width: inherit;
    justify-self: center;
    align-self: center;
`

const AddButton = styled.button`
    width: inherit;
    cursor: pointer;
    border: none;
    font-size: 15px;
    margin-top: 0.5rem;
    padding: 1rem;
    color: black;
    background-color: rgb(197,191,184);
    text-transform: uppercase;
    font-weight: 450;
    
    &:hover {
        background-color: black;
        color: white;
        transition: 0.7s ease;
    }
`

const RemoveButton = styled.button`
    width: 100%;
    cursor: pointer;
    border: none;
    font-size: 15px;
    padding: 1rem;
    color: black;
    background-color: rgb(179,99,90);
    text-transform: uppercase;
    font-weight: 450;
    
    &:hover {
        background-color: black;
        color: white;
        transition: 0.7s ease;
    }
`