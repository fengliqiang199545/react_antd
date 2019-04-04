import React from 'react'
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/Login'
import NoMatch from './pages/noMatchDemo/NoMatch'
import Buttons from './components/Buttons'
import Home from './pages/home'
import Modals from './components/Modal'
import SpinExp from './components/Spins'
import NotificationExp from './components/Notification'
import Messages from './components/message'
import Tab from './components/Tabs'
import TableExp from './components/Table'
import CaroutselExp from './components/Carousel'
import LoginForm from './components/Form/Login2'
import RegisterForm from './components/Form/Register'
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
              <Route path="/ui/modals" component={Modals}/>
              <Route path="/ui/loadings" component={SpinExp}/>
              <Route path="/ui/notification" component={NotificationExp}/>
              <Route path="/ui/messages" component={Messages}/>
              <Route path="/ui/tabs" component={Tab}/>
              <Route path="/ui/carousel" component={CaroutselExp}/>
              <Route path="/form/login" component={LoginForm}/>
              <Route path="/table/basic" component={TableExp}/>
              <Route path='/form/reg' component={RegisterForm}/>
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