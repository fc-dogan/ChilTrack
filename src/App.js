import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard'
import CreateNewKidProfile from './Components/CreateNewKidProfile';
import KidDetails from './Components/KidDetails'
import ProfileControl from './Components/ProfileControl';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/create' component={CreateNewKidProfile} />
        <Route path='/details/:id' component={KidDetails} />
        {/* <Route path='/' component={ProfileControl} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
