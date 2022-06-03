/* eslint-disable */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
// import product from '../../sanity-project/schemas/product.js';

const Rentals = () => {
    const [product, setProduct] = useState([]);

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
                setProduct(data)
            })     
    }, []);

    return (
        <main>
            <section>
                <h1>Web shop page</h1>
                <h2>Welcome to the rentals web shop!</h2>
                <div>
                    {product.map((product, index) => {
                        {/* <article key={product._id}> */}
                            {/* <Link to={"/product/" + product.slug.current} key={product.slug.current}> */}
                                <span key={index}>
                                    <img
                                    src={product.mainImage.asset.url}
                                    alt={product.title}
                                    />
                                    {/* <span> */}
                                        <h3 className="product">{product.title}</h3>
                                    {/* </span> */}
                                </span>
                            {/* </Link> */}
                        {/* </article> */}
                    })}
                </div>
            </section>  
        </main>


    )
};

export default Rentals;
