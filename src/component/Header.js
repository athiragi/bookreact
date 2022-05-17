import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
      <Link className="navbar-brand" to="/">BOOK LIBRARY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-link active" to="/">Addbook</Link>
      <Link className="nav-link" to="/search">BookSearch</Link>
      <Link className="nav-link" to="/view">ViewBook</Link>
        
      </div>
    </div>
  </div>
</nav>
        </div>
  )
}

export default Header