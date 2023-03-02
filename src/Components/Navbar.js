import {  NavLink } from "react-router-dom"

const Navbar = ()=> {
    

    return(
        <nav className="navbar navbar-expand-lg bg-light  ">
            <div className="container-fluid p-7">
                <h1>TAGBOOKS</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                    <li className="nav-item">
                        <NavLink className="nav-link fw-bolder p-3 m-2 " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-bolder p-3 m-2" to="/books">BOOKS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-bolder p-3 m-2" to="/search">Search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-bolder p-3 m-2" to="/favourites">FAVOURITES</NavLink>
                    </li>
                    
                </ul>
                <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
         </form>
                
                </div>
            </div>
        </nav>
    )
}
export default Navbar