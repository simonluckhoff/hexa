// Changed it so that just the search box is here.  
function Search({ query, setQuery }) {
    return (
        <input
            className="form-control-lg input-bg center-placeholder rounded w-50"
            type="text"
            value={query}
            // setQuery is updating the query state.
            // triggers re-render of Contents. Query now holds latest string. 
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search colours..."
        />
    );
}

export default Search;
