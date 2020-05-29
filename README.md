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

yarn add redux-form

return <input {...formProps.input} />;

- means take all the formProps input properties and add them to the input element

4. wiring up connect and redux form:

```
start of with this:


      export default reduxForm({
         form: 'postCreate',
         validate,
      })(PostCreate);

   we CAN wrap it as normal: export default connect()(reduxForm{  etc etc})

   however this syntax is usually used: put reduxForm part in a var and wrap that:

   like this to start:


      const formWrapped =  reduxForm({
      form: 'postCreate',
      validate,
      })(PostCreate);

      export default connect(null, {createPost})(formWrapped)


```

5.Create all our action creators at once since we know what we want given we are using restful conventions.
