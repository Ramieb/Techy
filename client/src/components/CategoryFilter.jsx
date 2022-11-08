import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {categoryManager} from '../reducers/category';

const categories = [
    "all",
    "computer",
    "phone",
    "headset",
    "earphone",
    "speaker",
    "tablet",
];

function CategoryFilter() {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.category.value)
    return (
    <fieldset className='category-filter' style={{padding:'0.5rem'}}>
        <legend>Category</legend>
        {categories.map( cat => (
            <label htmlFor={cat} key={cat}>
            <input
            type="radio"
            name="categories"
            id={cat}
            value={cat}
            checked={cat === category.categoryFilter}
            onChange={e => dispatch(categoryManager({ categoryFilter: e.target.value}))}
            />
            <div className='category-name'>
                {cat}
            </div>
        </label>
        ))}
        </fieldset>
    )
}

export default CategoryFilter;
