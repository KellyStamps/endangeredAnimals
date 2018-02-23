import React from 'react'
import AnimalList from './AnimalList'

class AnimalContainer extends React.Component {

  state = {
    animals: []
  }

  componentDidMount = () => {
    this.setState({animals: this.props.animals})
  }

  render () {
    return (
      <div>
        <h1>There are currently over 10,000 endangered species in the United States.</h1>
        <AnimalList animals={this.state.animals}/>
      </div>

    )
  }
}

export default AnimalContainer
