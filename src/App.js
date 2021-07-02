import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import {
    Enter,
    Room
} from './components'

const App = () => (
    <Router>
        <Route path='/' exact component={Enter} />
        <Route path='/room' component={Room} />
    </Router>
);

export default App;

