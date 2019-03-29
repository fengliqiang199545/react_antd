import React from 'react'

class NoMatch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <div>
        <h1>No Match for {this.props.location.pathname}</h1>
      </div>
    )
  }
}

NoMatch.propTypes = {}

export default NoMatch