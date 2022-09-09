import React from "react";

function SearchBar() {
    return (
    <form className="searchBar">
        <input
        type="text"
        />
        <button 
        type="submit" 
        className="searchButton">
        Search
        </button>
    </form>
    )
}

export default SearchBar;