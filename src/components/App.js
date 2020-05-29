import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostsIndex from './PostsIndex';
import PostCreate from './PostCreate';
import PostShow from './PostShow';

import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' exact component={PostsIndex} />
            <Route path='/posts/new' exact component={PostCreate} />
            <Route path='/posts/:id' exact component={PostShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
