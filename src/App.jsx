import React from "react";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products";
import PriceFilter from './components/PriceFilter';

function App() {
    return (
        <main>
            <section className="filters">
                <p>TECHY</p>
                <PriceFilter/>
            </section>
            <section className = "page-contents">
            <SearchBar/>
            <Products/>
            </section>
        </main>
    );
}

export default App;