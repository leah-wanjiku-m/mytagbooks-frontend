 import React ,{useEffect,useState}from 'react';
//import './App.css';
import Navbar from"./Components/Navbar";
import Books from"./Components/Books";
import Favourites from './Components/Favourites';
import Search from './Components/Search';
import { Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  useEffect(()=>{
    fetch("/books")
   .then((response)=>response.json())
   .then((data)=>setBooks(data))
 },[]);

  return (
    <div >
      <Navbar/>
      <Routes>
    <Route path='/books' element={<Books books={books} />}/>
    <Route path='/search' element={<Search />}/>
     <Route path='/favourites' element={<Favourites  books={books}  />}/>
      </Routes>
    </div>
     );
    
   
}

export default App;
