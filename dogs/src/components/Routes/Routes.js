import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import DogList from '../DogList/DogList'
import DogDetails from '../DogDetails/DogDetails'

class Routes extends Component {
  render() {
    const getDog = props => {
      const name = props.match.params.name
      const currentDog = this.props.dogs.find(dog => name.toLowerCase() === dog.name.toLowerCase())
      return <DogDetails dog={currentDog} />
    }

    return (
      <Switch>
        <Route
          path='/dogs'
          exact
          render={(routerParams) => <DogList dogs={this.props.dogs} {...routerParams} />}
        />
        <Route
          path='/dogs/:name'
          exact
          render={getDog}
        />
        <Redirect to='/dogs' />
      </Switch>
    )
  }
}

export default Routes
