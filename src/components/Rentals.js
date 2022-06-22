/* eslint-disable */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { wishlist } from '../reducers/wishlist';

import styled from 'styled-components';


const Rentals = () => {

    const [productData, setProductData] = useState();

    const dispatch = useDispatch()

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "product"]{
                title,
                slug,
                price,
                _id,
                defaultProductVariant{
                    price,
                    sku,
                },
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                }
            }`
        )
            .then(data => {
                setProductData(data)
                console.log(data)
            })     
    }, []);

    return (
        <Main>
            <ArticleContainer>
                <Header>Hyrsaker</Header>
                <Info>Yes! Dags att välja dekoration!
                    Lägg sådant du önskar i din önskelista och skicka den sen till oss så återkommer vi med
                    offert för dig att ta ställning till.</Info>
                    <RentalsContainer>
                    {productData && productData.map((product, index) => (
                        <CardContainer key={index}>
                            <Link to={"/product/" + product.slug.current} key={product.slug.current}>
                                <span className="product-span" key={index}>
                                    <img className="product-image"
                                        src={product.mainImage.asset.url}
                                        alt={product.title}
                                    />
                                     <span className="title-span" key={index}> 
                                        <RentalsInfoText>{product.title}</RentalsInfoText>
                                     </span>
                                     <RentalsInfoText>{product.defaultProductVariant.price} {product.defaultProductVariant.sku}/dag</RentalsInfoText>
                                </span>
                            </Link> 
                            <AddButton
                                disabled={product.inventory === 0}
                                onClick={() => dispatch(wishlist.actions.addItem(product))}>
                                Lägg i önskelistan
                            </AddButton>
                        </CardContainer> 
                    ))}
                    </RentalsContainer>
            </ArticleContainer>
        </Main>
    )
};

export default Rentals;


const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    background-color: white;
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

const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: 2.5rem;
    font-size: 32px;
    letter-spacing: .15em;

    @media (min-width: 768px) {
        font-size: 40px;
        letter-spacing: .2em;
    }

`

const Info = styled.h4 `
    font-weight: 300;
    margin: 12px 0;
    line-height: 28px;
    padding-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 20px;
        letter-spacing: .03em;
    }
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
    padding: .5rem 0.5rem 0.5rem 0;

}
`

const AddButton = styled.button`
    width: 100%;
    margin: 15px 0 0 0;
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
    /* height: 30px; */
    }
`;
