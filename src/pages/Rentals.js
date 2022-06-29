/* eslint-disable */
import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { wishlist } from '../reducers/wishlist';

import styled from 'styled-components';


const Rentals = () => {
    const [productData, setProductData] = useState();
    const [category, setCategory] = useState();
    const [filterProducts, setFilterProducts] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "product"]{
                title,
                slug,
                price,
                _id,
                "categories": categories[]->title,
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
                setFilterProducts(data)
                setCategory([...new Set([].concat.apply([], data.map((item) => item.categories)))])
                console.log(data)
            })     
    }, []);

    const filterByCategory = (value) => {
        console.log(value)
        if (value === "Visa alla") {
            setFilterProducts(productData)
        } else {
            setFilterProducts(productData.filter(product => product.categories[0]  === value))
        }
    }

    return (
        <Main>
            <ArticleContainer>
                <Header>Hyrsaker</Header>
                <Info>Yes! Dags att välja dekoration!
                    Lägg sådant du önskar i din önskelista och skicka den sen till oss så återkommer vi med
                    offert för dig att ta ställning till.</Info>
                    <RentalsContainer> 
                        <ButtonContainer>
                            <FilteringButtons activeClassName='active' onClick={() => filterByCategory("Visa alla")}>Visa alla</FilteringButtons>
                            {category && category.map((category, index) => (
                                <div key={index}>
                                    <FilteringButtons activeClassName='active' onClick={() => filterByCategory(category)}>{category}</FilteringButtons>
                                </div>
                            ))}
                        </ButtonContainer>
                        <ItemContainer>
                        {filterProducts && filterProducts.map((product, index) => (
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
                        </ItemContainer>
                    </RentalsContainer>
            </ArticleContainer>
        </Main>
    )
};

export default Rentals;

const ButtonContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 90vw;
    justify-content: center;
    align-self: center;
    gap: 20px;
    justify-content: baseline;
    margin: 25px 0 10px 0;
    overflow: hidden;

    @media (min-width: 768px) {
        margin: 30px 0;
        grid-template-columns: repeat(4, 1fr);
        max-width: 90vw;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(8, auto);
        gap: 20px;
    }

`

// -------------- Alternative styling for buttons ------------- //

// const FilteringButtons = styled.button`
//     font-weight: 400;
//     margin: 10px;
//     border: none;
//     outline: none;
//     font-size: 13px;
//     background: none;
//     transition: ease .5s;
//     cursor: pointer;
//     text-transform: uppercase;
//     color: #6E6D6C;

//     @media (min-width: 768px) {
//         font-size: 15px;
//         width: 170px;
//     }

//     &:hover {
//         text-decoration: underline;
//         text-underline-offset: .3em;
//         color: black;
//     }

//     &.active {
//         text-decoration: underline;
//         text-underline-offset: .3em;
//         color: black;
//     }
// `

const FilteringButtons = styled.button`
  font-weight: 400;
  border: none;
  outline: none;
  height: auto;
  font-size: 15px;
  background: #6E6D6C;
  color: white;
  padding: 7px;
  transition: all .25s ease-in-out;
  width: 160px;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: auto;
    padding: 7px 13px;
}

  &:hover {
    background: black;
  }
`

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
    max-width: 100vw;
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

const ItemContainer = styled.div `
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
        /* display: grid; */
        grid-template-columns: repeat(4, 1fr);
    }
`

const RentalsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
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
    width: 40vh;
    padding: 1rem 1rem 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;

    @media (min-width: 668px) {
        width: 35vh;
        padding: .5rem 0.5rem 0.5rem 0;
    }

`

const AddButton = styled.button`
    width: 100%;
    margin: 15px 0 0 0;
    border: none;
    font-size: 16px;
    
    padding: 1rem;
    color: black;
    background-color: rgb(197,191,184);
    text-transform: uppercase;
    font-weight: 450;
    cursor: pointer;
    
    &:hover {
        background-color: black;
        color: white;
        transition: 0.7s ease;
    }
`
