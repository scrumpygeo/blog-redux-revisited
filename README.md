## React-Redux Blog

1. Setup

Using `http://reduxblog.herokuapp.com/api/posts` api for blogs which has these fields:

```

title
categories
content

eg

{
id: 319494,
title: "Merhaba/Hello",
categories: "request, response",
content: "Bu bir denemedir./This is just a test."
},

```

2. Add Router

   yarn add react-router-dom

in App.js:

import { Router, Route, Switch } from 'react-router-dom';

```
in src/history.js:

import { createBrowserHistory } from 'history';
export default createBrowserHistory();
```

3. Add redux form
