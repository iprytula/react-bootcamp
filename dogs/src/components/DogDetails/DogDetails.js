import React from 'react'
import './DogDetails.css'
import { Link } from 'react-router-dom'

function DogDetails(props) {
  const { dog } = props

  return (
    <div className='DogDetails justify-content-center my-5'>
      <div className='col-11 col-lg-5'>
        <div className='DogDetails-card card'>
          <img src={dog.src} alt={dog.name} />
          <div className='card-body'>
            <h2 className='card-title'>{dog.name}</h2>
            <h4 className='card-subtitle text-muted'>{dog.age} years old</h4>
          </div>
          <ul className='list-group list-group-flush'>
            {dog.facts.map(fact => <li className='list-group-item'>{fact}</li>)}
          </ul>
          <div className='card-body'>
            <Link to='/dogs' className='btn btn-info'>Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogDetails
