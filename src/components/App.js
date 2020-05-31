import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostsIndex from './PostsIndex';
import PostCreate from './PostCreate';
import PostShow from './PostShow';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';

import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' exact component={PostsIndex} />
            <Route path='/posts/new' exact component={PostCreate} />
            <Route path='/posts/edit/:id' exact component={PostEdit} />
            <Route path='/posts/delete/:id' exact component={PostDelete} />
            <Route path='/posts/:id' exact component={PostShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
