import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import sanityClient from '../client.js';
import { wishlist } from '../reducers/wishlist';

import styled from 'styled-components';


const SingleRentalsItem = () => {
    const [singleProduct, setsingleProduct] = useState(null);
    const dispatch = useDispatch()
    
    const { slug } = useParams();

    const handleAddItem = () => {
        dispatch(wishlist.actions.addItem(singleProduct))
    }

    const navigate = useNavigate();

    const onBackButtonClick = ()=> {
        navigate(-1);
    }

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            category,
            body,
            price,
            defaultProductVariant{
                material,
                price,
                sku,
                dimensions,
                quantity,
                color,
                description
            },
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            defaultBlockContent{
                body,  
            },
            "name": product->name,
            "productImage": product-> image
        }`).then((data) => setsingleProduct(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singleProduct) return <div>Loading...</div>

    return (
        <Main>
            <ArticleContainer>
                <GoBackButton onClick={onBackButtonClick}>Tillbaka</GoBackButton>
                <Header>{singleProduct.title}</Header>
                <CardContainer>
                    <img src={singleProduct.mainImage.asset.url}
                        alt={singleProduct.title}
                    />
                    <Info>Pris: {singleProduct.defaultProductVariant.price} {singleProduct.defaultProductVariant.sku}/dag</Info>
                    <Info>Storlek: {singleProduct.defaultProductVariant.dimensions}</Info>
                    <Info>Antal i lager: {singleProduct.defaultProductVariant.quantity}st</Info>
                    <Info>Beskrivning: {singleProduct.defaultProductVariant.description}</Info>

                    <AddButton
                        disabled={singleProduct.inventory === 0}
                        onClick={handleAddItem}>
                        Lägg till i önskelistan
                    </AddButton>
                </CardContainer>
            </ArticleContainer>
        </Main>
    )
};

export default SingleRentalsItem;

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

const GoBackButton = styled.button`
    width: 100%;
    margin: 2rem 0 2rem 0;
    cursor: pointer;
    border: none;
    font-size: 16px;
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

const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: 2.5rem;
    font-size: 32px;
    letter-spacing: .15em;

    @media (min-width: 668px) {
        font-size: 37px;
        letter-spacing: .2em;
    }
`

const CardContainer = styled.div`
    background-color: white;
    width: 55vw;
    padding: 1rem;
`

const Info = styled.h4 `
    padding: .8rem;
    font-weight: 300;
    margin: 12px 0;
    line-height: 28px;

    @media (min-width: 668px) {
        font-size: 18px;
        letter-spacing: .03em;
    }
`

const AddButton = styled.button`
    width: 100%;
    margin: 2rem 0 2rem 0;
    cursor: pointer;
    border: none;
    font-size: 16px;
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