import express from 'express';
import path from 'path';
import compression from 'compression';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router'


import routes from './modules/routes'

/**
* Init Server
*/
var app = express();
var PORT = process.env.port || 8080;

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>Server rendering First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

//Server fallback
app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    console.log("request url: ", req.url);
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

app.listen(PORT, function(){
    console.log('Production Express server running at localhost:' + PORT);
});