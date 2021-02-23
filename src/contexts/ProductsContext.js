import React, { createContext, useState,useEffect } from 'react';
import { dummyProducts } from '../services/dummy';
export const ProductsContext = createContext()
const axios = require('axios');

const ProductsContextProvider = ({children}) => {

    const [products,setproducts] = useState(dummyProducts);

    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get('https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7')
        .then(function (response) {
            // handle success
            setproducts(response.data)
            // console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    },[]);

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;