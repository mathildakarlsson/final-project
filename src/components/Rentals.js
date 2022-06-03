/* eslint-disable */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
// import product from '../../sanity-project/schemas/product.js';

const Rentals = () => {
    const [rental, setRental] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "product"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                alt
            }
    }`)
    .then((data) => setRental(data))
    .catch(console.error)
}, [])

    return (
        <main>
          <section>
              <Link to={"/product/" + product.slug.current} key={product.slug.current}>
              <h1 className='hello'>Web shop page with rentals!!!</h1>
              <img
              src={product.mainImage.asset.url}
              alt={product.mainImage.alt}
              />
              </Link>
        </section>  
        </main>


    )
};

export default Rentals;
