import React from 'react';
import { Router , Route ,IndexRoute } from 'react-router';
import Home from '../components/home.jsx';
import Post from '../components/post.jsx';

export default ({ history })=> {
    return <Router history = { history }>
        <Route path="/"  component={ Home } />
        <Route path="/home"  component={ Home } />
        <Route path="/home/:searchWord" component={ Home }/>
        <Route path="/post/:slug" component={ Post }/>
    </Router>
}

