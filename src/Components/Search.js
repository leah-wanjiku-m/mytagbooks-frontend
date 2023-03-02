import React ,{useState}from 'react';
function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    function handleSearchChange(event) {
      setSearchQuery(event.target.value);
    }
  
    function handleSearchSubmit(event) {
      event.preventDefault();
  
      fetch(`/books/search?title=${searchQuery}`)
        .then(response => response.json())
        .then(data => setSearchResults(data));
    }
  
    return (
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input type="text" value={searchQuery} onChange={handleSearchChange} />
          <button type="submit">Search</button>
        </form>
  
        {searchResults.map(book => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <img src={book.image_url} alt={book.title} />
          </div>
        ))}
      </div>
    );
  }
  export default Search