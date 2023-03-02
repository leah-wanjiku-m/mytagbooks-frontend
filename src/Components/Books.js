import React from 'react';
// import { stringify } from 'circular-json';
import {  useNavigate } from "react-router-dom";
  

function Books({books}) {
  const navigate = useNavigate();
  // const jsonString = stringify(books);
  // const isFavorite = (book) => {
  //   return favorites.some(favorite => favorite.book.id === book.id);
  // };

  const handleFavoriteClick = (book_id) => {
    fetch("http://localhost:9292/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_id: book_id,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
         console.log(data);
         setTimeout(() => navigate('/favourites'), 100);

      } );
  //   fetch('/favourites', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ book_id: book_id })
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error))
   }

  return (
    <div className="row">
      {  books.map((book) => (
        <div key={book.id}  className="card" style={{ width: "18rem" }}>
          <img src={book.image_url} className="card-img-top" alt={book.title} />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.description}</p>
            <button className="btn btn-primary" onClick={() => handleFavoriteClick(book.id)}>
               Favourites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}










 export default Books;