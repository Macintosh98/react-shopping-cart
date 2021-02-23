import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <hr/>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;