import React from "react"
import SearchBar from "./SearchBar"
import Products from "./Products"
import PriceFilter from './PriceFilter'
import CategoryFilter from './CategoryFilter'
import NavBar from './NavBar'
import Slider from "./Slider"

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="everythingElse">
            <section className="filters">
                <p className="techy">TECHY</p>
                <PriceFilter /> <br />
                <CategoryFilter />
            </section>
            <section className = "page-contents">
            <SearchBar />
            {/* <Slider /> */}
            <Products />
            </section>
            </div>
        </div>
    );
}

export default HomePage;