import React from "react";
import items from "../data";
import cartIcon from '../images/shopping-cart.png';
import {useSelector} from 'react-redux';

function Products() {
    const category = useSelector((state) => state.category.value)
    const search = useSelector((state) => state.search.value)
    const price = useSelector((state) => state.price.value)
    const productsFiltered = items
    .filter(item => item.category === category.categoryFilter || category.categoryFilter === "all")
    .filter(item => item.name.toLowerCase().includes(search.submitSearch.toLowerCase()) || item.description.toLowerCase().includes(search.submitSearch.toLowerCase()))
    .filter(item => item.price >= price.priceFilter[0] && item.price <= price.priceFilter[1])
    .map(item => (
        <li key={item.id} className="card">
        <h3>{item.name}</h3>
        <img src={item.image} alt="" />
        <div className="desc-price">
        {item.description && <p>{item.description}</p>}
        <div>${item.price.toFixed(2)}</div>
        </div>
        <button className="add-to-cart-button"><p>Add to cart</p><img src={cartIcon}></img></button>
    </li>
    ));
    return (
        <>
            <div className="pageContent">
                <ul className="collection">
                    {productsFiltered.length ? (
                        productsFiltered
                    ) : (
                        <li className="card">No results found</li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default Products;