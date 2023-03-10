/* eslint-disable */
import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { wishlist } from '../reducers/wishlist';

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
                <Info>Yes! Dags att välja dekoration!</Info>
                <Info>Lägg sådant du önskar i din önskelista och skicka den sen till oss så återkommer vi med
                    offert för dig att ta ställning till.</Info>
                    <RentalsContainer> 
                        <ButtonContainer>
                            {category && category.map((category, index) => (
                                <div key={index}>
                                    <FilteringButtons activeClassName='active' onClick={() => filterByCategory(category)}>{category}</FilteringButtons>
                                </div>
                            ))}
                        </ButtonContainer>
                            <ShowAllFilteringButton activeClassName='active' onClick={() => filterByCategory("Visa alla")}>| Visa alla</ShowAllFilteringButton>
                            <MobileShowAllFilteringButton activeClassName='active' onClick={() => filterByCategory("Visa alla")}>Visa alla</MobileShowAllFilteringButton>
                        <ItemContainer>
                        {filterProducts && filterProducts.map((product, index) => (
                            <CardContainer key={index}>
                                <AddButton
                                    disabled={product.inventory === 0}
                                    onClick={() => dispatch(wishlist.actions.addItem(product))}>
                                    +                                
                                </AddButton>
                                <Link to={"/product/" + product.slug.current} key={product.slug.current}>
                                    <span className="product-span" key={index}>
                                            
                                        <img className="product-image"
                                            src={product.mainImage.asset.url}
                                            alt={product.title}
                                        />
                                        <span className="title-span" key={index}> 
                                            <RentalsInfoText>{product.title}</RentalsInfoText>
                                        </span>
                                        <RentalsInfoText>{product.defaultProductVariant.price} {product.defaultProductVariant.sku}</RentalsInfoText>
                                    </span>
                                </Link> 
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 90vw;
    justify-content: center;
    align-self: center;
    gap: 10px;
    justify-content: baseline;
    overflow: hidden;

    @media (min-width: 768px) {
        margin: 15px 0;
        max-width: 90vw;
    }
`

const FilteringButtons = styled.button`
    font-weight: 400;
    border: none;
    outline: none;
    font-size: 13px;
    background: none;
    transition: ease .5s;
    cursor: pointer;
    text-transform: uppercase;
    color: #6E6D6C;
    letter-spacing: .18em;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        font-size: 15px;
    }

    &:hover {
        color: black;
    }

    &.active {
        text-decoration: underline;
        text-underline-offset: .3em;
        color: black;
    }

    &:after {
        content: " |"
    }
`

const ShowAllFilteringButton = styled.button`
    display: none;
    font-weight: 400;
    border: none;
    outline: none;
    font-size: 13px;
    background: none;
    transition: ease .5s;
    cursor: pointer;
    text-transform: uppercase;
    color: #6E6D6C;
    letter-spacing: .18em;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        font-size: 15px;
        display: block;
    }

    &:hover {
        color: black;
    }

    &.active {
        text-decoration: underline;
        text-underline-offset: .3em;
        color: black;
    }

    &:after {
        content: " |"
    }
`

const MobileShowAllFilteringButton = styled.button`
    font-weight: 400;
    border: none;
    outline: none;
    font-size: 13px;
    background: none;
    transition: ease .5s;
    cursor: pointer;
    text-transform: uppercase;
    color: #6E6D6C;
    letter-spacing: .18em;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        display: none;
    }

    &:hover {
        color: black;
    }

    &.active {
        text-decoration: underline;
        text-underline-offset: .3em;
        color: black;
    }
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    /* margin: 1rem; */
    justify-content: center;
    align-items: center;
    width: 100vw;
`

const ArticleContainer = styled.article`
    padding: 170px 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-self: center;
    max-width: 80vw;
`

// const TitleSpan = styled.span `
//     display:block;
//     position:relative;
//     display: flex; 
//     justify-content: center;
//     justify-items: end;
//     padding: 4px;
//     background-color: white;

// `

// const ProductSpan = styled.span `
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: white;
//     height: 220px;
// `


const Header = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: 30px;
    font-size: 32px;
    letter-spacing: .15em;

    @media (min-width: 668px) {
        font-size: 37px;
        letter-spacing: .2em;
    }
`

const Info = styled.h4 `
    font-weight: 300;
    // margin: 12px 0;
    line-height: 28px;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        font-size: 18px;
        letter-spacing: .03em;
    }
`

const ItemContainer = styled.div `
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
    

    // @media (min-width: 600px) {
    //     grid-template-columns: repeat(2, 1fr);
    //     gap: 10px;
    // }

    // @media (min-width: 768px) {
    //     grid-template-columns: repeat(3, 1fr);
    //     gap: 10px;
    // }

    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    // @media (min-width: 1024px) {
    //     grid-template-columns: repeat(4, 1fr);
    //     gap: 30px;
    // }

    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    
`

const RentalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const RentalsInfoText = styled.h1 `
    text-transform: uppercase;
    font-weight: 300;
    font-size: 15px;
    letter-spacing: .15em;
    /* background-color: blue; */
    color: black;
    margin-top: 0.5rem;

    @media (min-width: 668px) {
        font-size: 15px;
        letter-spacing: .2em;
    }
`

const CardContainer = styled.div`
    background-color: white; 
    // width: 40vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    position: relative;

    // @media (min-width: 668px) {
    //     width: 30vh;
    //     padding: .5rem;
    // }
`
const AddButton = styled.button`
    width: 2.3rem;
    border: none;
    font-size: 22px;                                                                                                            
    font-weight: 400;
    cursor: pointer;
    color: white;
    background-color: #C5BFB8;
    position: absolute;
    z-index: 100;
    top: 5%;
    right: 5%;
    
    &:hover {
        transition: 0.7s ease;
        color: black;
    }
`

// --------- saving former styling for buttons ----------- //
// const AddButton = styled.button`
//     width: 100%;
//     margin: 15px 0 0 0;
//     border: none;
//     font-size: 16px;
    
//     padding: 1rem;
//     color: black;
//     background-color: rgb(197,191,184);
//     text-transform: uppercase;
//     font-weight: 450;
//     cursor: pointer;
    
//     &:hover {
//         background-color: black;
//         color: white;
//         transition: 0.7s ease;
//     }
// `
// --------- saving former styling for buttons ----------- //