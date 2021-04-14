import React from 'react'
import ReactDom from 'react-dom'
import KeyList from './Components/KeyList'
import Login from './Components/Login'
import Register from './Components/Register'
import { ProtectedRoute } from './Components/ProtectedRoute';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Index() {
return (
  <Router>
    <Switch>
      <Route exact path="/"  component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <ProtectedRoute exact path="/main" component={KeyList}></ProtectedRoute>
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  </Router>
  )
}

ReactDom.render(<Index/>, document.getElementById('root'))