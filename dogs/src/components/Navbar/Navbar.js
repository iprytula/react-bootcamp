import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/dogs' className='navbar-brand'>Dogs App</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <NavLink
              exact
              to='/dogs'
              className='nav-link'
              activeClassName="active"
            >
              Home
            </NavLink>
            {this.props.dogs.map(dog => 
            <NavLink
              exatc
              to={`/dogs/${dog.name.toLowerCase()}`}
              activeClassName="active"
              className='nav-link'
            >
              {dog.name}
            </NavLink>)}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
