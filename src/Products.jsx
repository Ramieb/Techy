import React from "react";
import items from "./data";

function Products() {
        const products = items.map(item => (
        <li key={item.id} className="card">
            <h3>{item.name}</h3>
            <img src={item.image} alt="" />
            <div className="desc-price">
            {item.description && <p>{item.description}</p>}
            <div>${item.price.toFixed(2)}</div>
            </div>
        </li>
    ));
    console.log(products);
    console.log("hi");
    return (
        <main>
            <div className="pageContent">
                <ul className="collection">
                    {products.length ? (
                        products
                    ) : (
                        <li className="card">No results found</li>
                    )}
                </ul>
            </div>
        </main>
    );
}

export default Products;