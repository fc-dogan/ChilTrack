import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard'
import CreateNewKidProfile from './Components/CreateNewKidProfile';
import KidDetails from './Components/KidDetails'
import CreateNewGoal from './Components/CreateNewGoal';
import GoodBehaviorList from './Components/BehaviorList/GoodBehaviorList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route exact path='/' /> */}
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/create' component={CreateNewKidProfile} />
        <Route path='/details/:id' component={KidDetails} />
        <Route path='/creategoal' component={CreateNewGoal} />
        {/* <Route path='/goodbehaviors' component={GoodBehaviorList} /> */}
        {/* <Route path='/' component={ProfileControl} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
