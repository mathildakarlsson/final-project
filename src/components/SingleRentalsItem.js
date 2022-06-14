import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
            <main className="single-main">
                <article>
                    <header>
                        <div className="single-product-card">
                            <h1>{singleProduct.title}</h1>
                            <div>
                                <img src={singleProduct.mainImage.asset.url}
                                    alt={singleProduct.title}
                                />
                                <p>Material: {singleProduct.defaultProductVariant.material}</p>
                                <p>Price: {singleProduct.defaultProductVariant.price} {singleProduct.defaultProductVariant.sku}/dag</p>
                                <p>Dimensions: {singleProduct.defaultProductVariant.dimensions}</p>
                                <p>Quantity: {singleProduct.defaultProductVariant.quantity}st</p>
                                <p>Color: {singleProduct.defaultProductVariant.color}</p>
                                <p>Description: {singleProduct.defaultProductVariant.description}</p>   
                                <p>{singleProduct.category}</p>
                                <p>♥️ TESTY MCtester ♥️</p>  
                                <p>Body:{singleProduct.defaultProductVariant.body}</p>
                            </div>
                            <AddButton
                                disabled={singleProduct.inventory === 0}
                                onClick={handleAddItem}>
                                Add to wishlist
                            </AddButton>
                        </div>
                    </header>
                </article>
            </main>
        )
};

export default SingleRentalsItem;

const AddButton = styled.button`
    width: 55%;
    margin: 15px 0 65px 0;
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


// ------------------- deleted code - saving in case of error messages -----------------------//


// import imageUrlBuilder from '@sanity/image-url';
// import BlockContent from "@sanity/block-content-to-react";


/* <p>Body:{singleProduct.defaultBlockContent.body}</p> */
/* <p>Body:{singleProduct.body}</p> */

/* <img src={singleProduct.mainImage.asset.url
        alt={singleProduct.title}
    /> */

/* <div>
        <BlockContent 
            blocks={singleProduct.body}
            blocks={singleProduct.defaultBlockContent.body}
            blocks={singleProduct.defaultProductVariant.body}
            projectId="ei5784pj"
            dataset="production"
        />
    </div> */