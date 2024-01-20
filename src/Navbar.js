import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
      <div>
          <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                  <p className="navbar-brand">Shoppzee</p>
                  <form className="d-flex" role="search">
                     
                     <button type="button" className="btn btn-primary btn-lg"><Link to="/cart" style={{color:"white"}}>Cart</Link></button>
                  </form>
              </div>
          </nav>
      </div>
  )
}

export default Navbar