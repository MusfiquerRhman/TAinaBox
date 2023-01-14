import React, { useState } from "react";

const SearchBox = React.memo(props => {
    const {text} = props;

    const [search, setSearch] = useState('');

    const onHandleChangeSearch = e => {
        setSearch(e.target.value)
    }

    return (
        <div className="search__container">
            <input value={search} 
                onChange={onHandleChangeSearch} 
                className="search__input" 
                placeholder={`Search ${text}`}
                type="text"
            />
        </div>
    )
})

export default SearchBox;