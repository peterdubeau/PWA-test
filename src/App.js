import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Forms from './Components/Forms/Forms'
import AnotherPage from './Components/AnotherPage/AnotherPage'
import './App.css';

function App() {
  return (<>
    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/forms">
      <Forms/>
    </Route>

    <Route exact path="/another-page">
      <AnotherPage />
    </Route>
  </>);
}

export default App;
