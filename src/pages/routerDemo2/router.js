import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import About from './About'
import User from './Users'
import Home from './Home'

class Router1 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
     <Router>

       <Home><div>
         <Route path="/about" component={About}/>
        <Route path="/users" component={User}/>
       </div>
       </Home>

     </Router>
    )
  }
}

Router1.propTypes = {}

export default Router1