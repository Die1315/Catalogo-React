function SearchBar({ search, onSearch }) {
  return (
    <div className="container-fluid">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(event) => {
          console.log("change.......");
          console.log(event.target.value);
          onSearch(event.target.value);
        }}
      />
    </div>
  );
}
export default SearchBar;
