import React from "react"
import items from "../data"
import Product from "./Product"
// import cartIcon from '../images/shopping-cart.png'
import {useSelector} from 'react-redux'
import { useState, useRef } from "react"
import ProductDetails from "./ProductDetails"
import { Navigate } from 'react-router-dom'

function Products() {
    const category = useSelector((state) => state.category.value)
    const search = useSelector((state) => state.search.value)
    const price = useSelector((state) => state.price.value)
    const [productClicked, setProductClicked] = useState(false)

    console.log(productClicked)
    function onClickHandler() {
        setProductClicked(true)
        console.log(productClicked)
    }
        
    const productsFiltered = items
    .filter(item => item.category === category.categoryFilter || category.categoryFilter === "all")
    .filter(item => item.name.toLowerCase().includes(search.submitSearch.toLowerCase()) || item.description.toLowerCase().includes(search.submitSearch.toLowerCase()))
    .filter(item => item.price >= price.priceFilter[0] && item.price <= price.priceFilter[1])
    .map(item => {
        // console.log(item.name," ",item.price);
           return <Product
                name = {item.name}
                description = {item.description}
                price = {item.price}
                image = {item.image}
                onClickHandler = {() => onClickHandler()}
            />
})
    return (
        productClicked ? <Navigate to="/details" /> :
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
    )
}

export default Products