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

    // const filterButtons = [
    //     { name: "Visa alla", value: "Visa alla" },
    //     { name: ${categories.title}, value: "whatever" },
    //   ]


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
                    <div>


                        <div>
                        {/* {filterProducts.map((product) => (
                            <CardContainer key={index} product={product} />
                        ))} */}
                        </div>
                            {/* <div>
                                <button value="Visa alla" onClick={() => filterByCategory()}>Visa alla</button>
                                <button value="Vaser och skålar" onClick={() => filterByCategory()}>Vaser och skålar</button>
                                <button value="Ljuslyktor och ljusstakar" onClick={() => filterByCategory()}>Ljusstakar och ljuslyktor</button>
                                <button value="Flaskor" onClick={() => filterByCategory()}>Flaskor</button>
                                <button value="Mattor" onClick={() => filterByCategory()}>Mattor</button>
                                <button value="Möbler" onClick={() => filterByCategory()}>Möbler</button>
                                <button value="Skyltar" onClick={() => filterByCategory()}>Skyltar</button>
                                <button value="Textil" onClick={() => filterByCategory()}>Textil</button> 
                            </div> */}
                    </div>
                    <RentalsContainer> 
                        {/* {flowersData && flowersData.map((nested) => nested.flowerImagesMobile.map((flowerImagesMobile, index) => ( */}
                            {/* {filterButtons.map(({ name, value }) => (
                                <FilterButtons key={name} onClick={() => filterByCategory(value)}>
                                {product.categories[0]}
                                </FilterButtons>
                            ))} */}
                                                    <div>
                            <button onClick={() => filterByCategory("Visa alla")}>Visa alla</button>
                        </div>
                    {category && category.map((category, index) => (
                        <div key={index}>
                            <button onClick={() => filterByCategory(category)}>{category}</button>
                        </div>

                    ))}

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
                                        {/* <RentalsInfoText>{product.categories[0]}</RentalsInfoText> */}
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

const FilterButtons = styled.button`
  font-family: 'Roboto', sans-serif;
  margin: 5px;
  border: none;
  outline: none;
  height: 30px;
  font-size: 16px;
  background: #8CA4B3;
  padding: 0 30px;
  transition: all .25s ease-in-out; 
  &:hover {
    background: #ecd6ba;
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
    }
`
       {/* <select value={value} onChange="filterOnChange(value)">
                                    <option value="visa alla">Visa alla</option>
                                    <option value="vaser och skålar">Vaser och skålar</option>
                                    <option value="ljusstakar och ljuslyktor">Ljusstakar och ljuslyktor</option>
                                    <option value="flaskor">Flaskor</option>
                                    <option value="mattor">Mattor</option>
                                    <option value="möbler">Möbler</option>
                                    <option value="skyltar">Skyltar</option>
                                    <option value="textil">Textil</option>
</select>*/}

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*["Mattor" in categories[]->title]{
    //             "categories": categories[]->title,
    //             title
    //         }`
    //     )
    //         .then(data => {
    //             console.log(data)
    //             setFilterProducts(data);
    //         })     
    // }, []);

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*["Skyltar" in categories[]->title]{
    //             "categories": categories[]->title,
    //             title
    //         }`
    //     )
    //         .then(data => {
    //             console.log(data)
    //             setFilterProducts(data);
    //         })     
    // }, []);

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*["Textil" in categories[]->title]{
    //             "categories": categories[]->title,
    //             title
    //         }`
    //     )
    //         .then(data => {
    //             console.log(data)
    //             setFilterProducts(data);
    //         })     
    // }, []);

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*["Flaskor" in categories[]->title]{
    //             "categories": categories[]->title,
    //             title
    //         }`
    //     )
    //         .then(data => {
    //             console.log(data)
    //             setFilterProducts(data);
    //         })     
    // }, []);

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*["Vaser & Skålar" in categories[]->title]{
    //             "categories": categories[]->title,
    //             title
    //         }`
    //     )
    //         .then(data => {
    //             console.log(data)
    //             setFilterProducts(data);
    //         })     
    // }, []);

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*["Ljusstakar & ljuslyktor" in categories[]->title]{
    //             "categories": categories[]->title,
    //             title
    //         }`
    //     )
    //         .then(data => {
    //             console.log(data)
    //             setFilterProducts(data);
    //         })     
    // }, []);
