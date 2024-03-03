import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PincodeForm from './components/PIncodeForm';
import PincodeResults from './components/PincodeResult';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PincodeForm} />
        <Route path="/results/:pincode" component={PincodeResults} />
      </Switch>
    </Router>
  );
};

export default App;
