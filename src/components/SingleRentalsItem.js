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
   
const [singleRental, setSingleRental] = useState(null);
const { slug } = useParams();


useEffect(() => {
    sanityClient.fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": product->name,
        "productImage": product-> image
    }`).then((data) => 
    setSingleRental(data[0]))

    .catch(console.error);

}, [slug]);


if (!singleRental) return <div>Loading...</div>

    return (
        <main>
            <article>
                <header>
                    <div>
                        <div>
                        <h1>{singleRental.title}Product details</h1>
                        <div>
                            <img src={urlFor(singleRental.productImage).url()}
                            alt={singleRental.title}
                        />
                         <p>{singleRental.title}</p>
                        <p>TESTY MCtester</p>
                        </div>
                    </div>
                    </div>
                    <img src={singleRental.mainImage.asset.url}
                    alt={singleRental.title}
                    />
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
