/* eslint-disable */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import product from '../../sanity-project/schemas/product.js';
import { useDispatch } from 'react-redux'
import { wishlist } from '../reducers/wishlist';

const Rentals = ({ product }) => {
    const [productData, setProductData] = useState();

    const allProducts = useSelector((state) => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "product"]{
                title,
                slug,
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
        <main>
            <h1>Web shop page</h1>
            <h2>Welcome to the rentals web shop!</h2>
            <section className="product-container">
                <div className="product-grid">

                    {productData && productData.map((product, index) => (
                        <article key={index}>
                            <Link to={"/product/" + product.slug.current} key={product.slug.current}>
                                <span className="product-span" key={index}>
                                    <img className="product-image"
                                    src={product.mainImage.asset.url}
                                    alt={product.title}
                                    />
                                     <span className="title-span" key={index}> 
                                        <h3 className="product-title">{product.title}</h3>
                                     </span> 
                                </span>
                             </Link> 
                             <button
                                    type="button"
                                    disabled={product.inventory === 0}
                                    onClick={() => dispatch(wishlist.actions.addItem(product))}>
                                    Add to wishlist
                                </button>
                         </article>
                        
                    ))}
                </div>
                {/* <div className="products">
                    {allProducts.map((product) => (
                        <product key={product._id} product={product} /> //ändrat till product och _id här */}
                    {/* ))} */}

                {/* <div className="products">
                    {allProducts.map((product, index) => (
                        <product key={index} product={index} /> //ändrat till index och _id här
                    ))}
                </div> */}
            </section>  
        </main>


    )
};

export default Rentals;
