import React from 'react';
import { Router } from '@reach/router';
import ListAuthor from './views/ListAuthor';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <ListAuthor path='/'/>
        <AddAuthor path='new'/>
        <EditAuthor path='edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
