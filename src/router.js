import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch'
import Home from './pages/home'
import FormLogin from './pages/form/login'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" render={()=>
                <Admin>
                  <Switch>
                    <Route path='/home' component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/form/login" component={FormLogin} />
                    <Redirect to="/home" />
                    {/* <Route component={NoMatch} /> */}
                  </Switch>
                </Admin>
            } />
            <Route path="/order/detail" component={Login} />
          </Switch>
        </App>
      </Router>
    )
  }
}