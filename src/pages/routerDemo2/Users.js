import React from 'react'
import {BrowserRouter as Router,Link , Route} from 'react-router-dom'
import Content from './Content'
class User extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <Router>
        <Link to="/content">content</Link>
        <Route path="/content" component={Content}></Route>
      </Router>
    )
  }
}

User.propTypes = {}

export default User