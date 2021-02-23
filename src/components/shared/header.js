import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
           <h1 style={{'color':'white'}}>McDonald's</h1>
           <small>4.3  |  35 min  |  $400 for two</small>
           <div className="row">
                <div className="col-sm-6">
                <input type="text" name="" placeholder="Search for dishes" className="form-control" id=""/>
                
               
                </div>
                <div className="col-sm-3"><button className="btn" style={{'backgroundColor':'white'}}>Veg only</button></div>
                <div className="col-sm-3"> <button className="btn"style={{'backgroundColor':'white'}}>favourite</button></div>
            </div>
        </header>
     );
}
 
export default Header;