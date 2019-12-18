import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home'
import NotFound from './pages/home/not-found'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
