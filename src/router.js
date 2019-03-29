import React from 'react'
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/Login'
import NoMatch from './pages/noMatchDemo/NoMatch'
import Buttons from './components/Buttons'
import Home from './pages/home'
class RouterExp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <Router>
        <App>
          <Switch>
          <Route path="/login" component={Login}/>
          <Route  path="/" render={()=>
            <Admin>
              <Switch>
              <Route path="/admin/ui/buttons" component={Buttons}/>

              </Switch>
            </Admin>
          }/>
          </Switch>
        </App>
      </Router>
    )
  }
}

RouterExp.propTypes = {}

export default RouterExp