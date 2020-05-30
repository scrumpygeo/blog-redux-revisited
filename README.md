## React-Redux Blog

Simple CRUD react redux app using heroku blog backend.

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

This api doesn't allow put or patch.
However as this front end will later be used with a custom rails api I will leave the functionality in.
