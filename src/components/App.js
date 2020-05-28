import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostsIndex from './PostsIndex';

import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' exact component={PostsIndex} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
