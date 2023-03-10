import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import sanityClient from '../client.js';
import { wishlist } from '../reducers/wishlist';

import { AiOutlineArrowLeft } from 'react-icons/ai'


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
                <ButtonContainer>
                    <GoBackButton onClick={onBackButtonClick}><ArrowButton /></GoBackButton>
                </ButtonContainer>
                <Header>{singleProduct.title}</Header>
                <CardContainer>
                    <img src={singleProduct.mainImage.asset.url}
                        alt={singleProduct.title}
                    />
                    <Info>Pris: {singleProduct.defaultProductVariant.price} {singleProduct.defaultProductVariant.sku}</Info>
                    <Info>Storlek: {singleProduct.defaultProductVariant.dimensions}</Info>
                    <Info>Antal i lager: {singleProduct.defaultProductVariant.quantity}st</Info>
                    <Info>Beskrivning: {singleProduct.defaultProductVariant.description}</Info>

                    <AddButton
                        disabled={singleProduct.inventory === 0}
                        onClick={handleAddItem}>
                        L??gg till i ??nskelistan
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
    /* margin: 1rem; */
`

const ArticleContainer = styled.article`
    padding: 170px 2rem 0 2rem;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-self: center;
`

const ButtonContainer =  styled.div `
    display: flex;
    width: 100%;
    justify-content: right;

    @media (min-width: 668px) {
        justify-content: left;
    }

`

const ArrowButton = styled(AiOutlineArrowLeft)`
    cursor: pointer;
    color: black;
    font-size: 1.8rem;
    
    &:hover {
        transition: .2s ease;
        font-size: 2rem;
    }
`

const GoBackButton = styled.button`
    width: 30px;
    cursor: pointer;
    border: none;
    padding: 1rem;
`

const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: 1.5rem;
    font-size: 25px;
    letter-spacing: .15em;
    width: 60vw;

    @media (min-width: 668px) {
        width: 100vw;
    }
`

const CardContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    max-width: 300px;

    @media (min-width: 525px) {
        align-self: center;
    }
`

const Info = styled.h4 `
    padding-top: .5rem;
    font-weight: 300;
    margin: 12px 0 12px 0px;
    line-height: 28px;
    text-align: left;
    width: 80vw;

`

const AddButton = styled.button`
    width: 170px;
    margin: 2rem 0 2rem 0;
    cursor: pointer;
    border: none;
    font-size: 16px;
    padding: 1rem;
    color: black;
    background-color: rgb(197,191,184);
    text-transform: uppercase;
    font-weight: 450;
    align-self: center;
    
    &:hover {
        background-color: black;
        color: white;
        transition: 0.7s ease;
    }
`