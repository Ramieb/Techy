import React from "react";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {searchManager} from '../reducers/search';

function SearchBar() {
    const dispatch = useDispatch()
    const search = useSelector((state) => state.search.value)
    return (
    <div className="searchBar">
        <input
            type="text"
            value={search.searchFilter}
            onChange={e => dispatch(searchManager({ searchFilter: e.target.value, submitSearch: search.submitSearch}))}
        />
        <button 
        type="submit" 
        className="searchButton"
        onClick={e => dispatch(searchManager({ ...search, submitSearch: search.searchFilter }))}
        >
        Search
        </button>
    </div>
    )
}

export default SearchBar;