import React from 'react'
import { HashRouter, Link, Route,  BrowserRouter as Router } from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
       <div>
         <ul>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/users">Users1</Link>
           </li>
         </ul>
         <hr/>
         {this.props.children}

       </div>
    )
  }
}

Home.propTypes = {}

export default Home