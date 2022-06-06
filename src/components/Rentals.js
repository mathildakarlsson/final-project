/* eslint-disable */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { wishlist } from '../reducers/wishlist';

const Rentals = () => {
    const [productData, setProductData] = useState();
    const dispatch = useDispatch()

    //Denna handler fungerar inte "product is not defined"
    // const handleAddItems = () => {
    //     dispatch(wishlist.actions.addItem(product))
    // }

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
        <main>
            <h2>Welcome to the rentals web shop!</h2>
            <section className="product-container">
                <div className="product-grid">

                    {productData && productData.map((product, index) => (
                        <article className="product-card" key={index}>
                            <Link to={"/product/" + product.slug.current} key={product.slug.current}>
                                <span className="product-span" key={index}>
                                    <img className="product-image"
                                        src={product.mainImage.asset.url}
                                        alt={product.title}
                                    />
                                     <span className="title-span" key={index}> 
                                        <h3 className="product-title">{product.title}</h3>
                                     </span>
                                     <p>{product.defaultProductVariant.price} {product.defaultProductVariant.sku}/day</p>
                                </span>
                            </Link> 
                            <button
                                className="add-button"
                                type="button"
                                disabled={product.inventory === 0}
                                onClick={() => dispatch(wishlist.actions.addItem(product))}>
                                Add to wishlist
                            </button>
                        </article> 
                    ))}
                    
                </div>
            </section>  
        </main>
    )
};

export default Rentals;

// ------------------- deleted code - saving in case of error messages -----------------------//

{/* <div className="products">
        {allProducts.map((product) => (
            <product key={product._id} product={product} /> //ändrat till product och _id här */}
        {/* ))} */}

{/* <div className="products">
        {allProducts.map((product, index) => (
            <product key={index} product={index} /> //ändrat till index och _id här
        ))}
     </div> */}