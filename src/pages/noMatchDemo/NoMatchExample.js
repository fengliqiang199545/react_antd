import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import  Home from './Home'
import WillMatch from './WillMatch'
import NoMatch from './NoMatch'

class NoMatchExample extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/old-match">Old Match, to be redirected</Link>
            </li>
            <li>
              <Link to="/will-match">Will Match</Link>
            </li>
            <li>
              <Link to="/will-not-match">Will Not Match</Link>
            </li>
            <li>
              <Link to="/also/will/not/match">Also Will Not Match</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Redirect from="/old-match" to="/will-match"/>
            <Route path="/will-match" component={WillMatch}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )
  }


}

NoMatchExample.propTypes = {}

export default NoMatchExample