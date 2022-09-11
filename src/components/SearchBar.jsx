import React from "react";
import items from "../data";
import cartIcon from '../images/shopping-cart.png';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {searchManager} from '../reducers/search';

function SearchBar() {
    const dispatch = useDispatch()
    const search = useSelector((state) => state.search.value)
    return (
    <form className="searchBar">
        <input
        type="text"
        value={search.searchFilter}
        onChange={e => dispatch(searchManager({ searchFilter: e.target.value}))}
        />
        <button 
        type="submit" 
        className="searchButton"
        // onClick={e => dispatch(searchManager({ searchFilter: }))}
        >
        Search
        </button>
    </form>
    )
}

export default SearchBar;