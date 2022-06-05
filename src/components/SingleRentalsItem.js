import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
// import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source)
// }
const SingleRentalsItem = () => {

const [singleProduct, setsingleProduct] = useState(null);
const { slug } = useParams();


useEffect(() => {
    sanityClient.fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        category,
        body,
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

    //kanske category istället för product här uppe

    .catch(console.error);

}, [slug]);


if (!singleProduct) return <div>Loading...</div>

    return (
        <main className="single-main">
            <article>
                <header>
                    <div>
                        <div>
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
                            {/* <p>Body:{singleProduct.defaultBlockContent.body}</p> */}
                            <p>Body:{singleProduct.defaultProductVariant.body}</p>
                            {/* <p>Body:{singleProduct.body}</p> */}

                        </div>
                            {/* <button
                                type="button"
                                disabled={singleProduct.inventory === 0}
                                onClick={() => dispatch(wishlist.actions.addItem(singleProduct))}>
                                Add to wishlist
                            </button> */}
                    </div>
                    </div>
                    {/* <img src={singleProduct.mainImage.asset.url}
                    alt={singleProduct.title}
                    /> */}
                </header>
                <div>
                    <BlockContent 
                    blocks={singleProduct.body}
                    // blocks={singleProduct.defaultBlockContent.body}
                    // blocks={singleProduct.defaultProductVariant.body}

                    projectId="ei5784pj"
                    dataset="production"
                    />
                </div>
                
            </article>
        </main>
    )
};

export default SingleRentalsItem;
