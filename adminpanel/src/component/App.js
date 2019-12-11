import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn'
import '../style/App.css';
import Dashboard from './Dashboard';


const App = () => (
  <div className="app-routes">
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
</div>
)


export default App;
