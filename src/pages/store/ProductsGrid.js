import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import CartProducts from '../cart/CartProducts';
import { ProductsContext } from '../../contexts/ProductsContext';
import { CartContext } from '../../contexts/CartContext';
import styles from './ProductsGrid.module.scss';
import { formatNumber } from '../../helpers/utils';

const ProductsGrid = () => {

    const { products} = useContext(ProductsContext)
    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                    {
                        products.map(product => (
                            <ProductItem key={product.id} product={product}/>
                        ))
                    }
                    </div>
                </div>
                <div className="col-sm-4">
                    {/* <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div> */}
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                      {
                                            cartItems.length > 0 ?
                                            <CartProducts/> :
                                            <div className="p-3 text-center text-muted">
                                                Your cart is empty
                                            </div>
                                        }
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                </div>
            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;