 import React ,{useEffect,useState}from 'react';
//import './App.css';
import Navbar from"./Components/Navbar";
import Books from"./Components/Books";
import Favourites from './Components/Favourites';
import Search from './Components/Search';
import { Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(()=>{
    fetch("/books")
   .then((response)=>response.json())
   .then((data)=>setBooks(data))
// },[]);
fetch('/favourites')
.then(response => response.json())
.then(data => setFavorites(data))
.catch(error => console.log(error));
}, []);

  return (
    <div >
      <Navbar/>
      <Routes>
    <Route path='/books' element={<Books books={books} favorites={favorites}/>}/>
    <Route path='/search' element={<Search />}/>
     <Route path='/favourites' element={<Favourites  books={books} favorites={favorites} />}/>
      </Routes>
    </div>
     );
    
   
}

export default App;
