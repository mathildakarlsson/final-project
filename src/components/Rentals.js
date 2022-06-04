/* eslint-disable */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
// import product from '../../sanity-project/schemas/product.js';

const Rentals = () => {
    const [productData, setProductData] = useState(null);

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
            <section className="product-container">
                <h1>Web shop page</h1>
                <h2>Welcome to the rentals web shop!</h2>
                <div className="product-grid">

                    {productData && productData.map((product, index) => (
                        // <article key={product._id}>
                        <article>
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
                         </article>
                        
                    ))}
                </div>
            </section>  
        </main>


    )
};

export default Rentals;
