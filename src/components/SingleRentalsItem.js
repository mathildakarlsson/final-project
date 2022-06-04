import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}
const SingleRentalsItem = () => {
    
    //kanske ändra till singleProduct
const [singleRental, setSingleRental] = useState(null);
const { slug } = useParams();


useEffect(() => {
    sanityClient.fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        category,
        defaultProductVariant{
            material,
            price,
            sku,
            dimensions,
            quantity,
            color
        },
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": product->name,
        "productImage": product-> image
    }`).then((data) => setSingleRental(data[0]))

    //kanske category istället för product här uppe

    .catch(console.error);

}, [slug]);


if (!singleRental) return <div>Loading...</div>

    return (
        <main className="single-main">
            <article>
                <header>
                    <div>
                        <div>
                        <h1>{singleRental.title}</h1>
                        <div>
                            <img src={singleRental.mainImage.asset.url}
                                alt={singleRental.title}
                            />
                            <p>Material: {singleRental.defaultProductVariant.material}</p>
                            <p>Price: {singleRental.defaultProductVariant.price} {singleRental.defaultProductVariant.sku}/dag</p>
                            {/* <p>Dimensions: {singleRental.defualtProductVariant.dimensions}</p> FUNKAR INTE */}
                            <p>Quantity: {singleRental.defaultProductVariant.quantity}st</p>
                            <p>Color: {singleRental.defaultProductVariant.color}</p>
                            <p>{singleRental.category}</p>
                            <p>♥️ TESTY MCtester ♥️</p>  
                        </div>
                    </div>
                    </div>
                    {/* <img src={singleRental.mainImage.asset.url}
                    alt={singleRental.title}
                    /> */}
                </header>
                <div>
                    <BlockContent 
                    blocks={singleRental.body}
                    projectId="ei5784pj"
                    dataset="production"
                    />
                </div>
                
            </article>
        </main>
    )
};

export default SingleRentalsItem;
