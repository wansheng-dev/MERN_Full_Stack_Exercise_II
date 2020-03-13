import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Paper, Button } from '@material-ui/core';

const ListAuthor = () => {
  const [ authorsState, setAuthorsState] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:8000/api/authors')
      .then(response => setAuthorsState(response.data))
      .catch(console.log);
  }, []);

  const handleDelete = id => {
    alert()
    axios.delete('http://localhost:8000/api/authors/delete/' + id)
      .then(() => {
        const newAuthors = authorsState.filter(author => author._id !== id);
        setAuthorsState(newAuthors);
      })
      .catch(console.log);
  }

  return (
    <div>
      <Paper elevation={4}>
        <h1>Favorite authors</h1>
      </Paper>
      <Link to = '/new'> Add an author </Link>
      <h5>We have quotes by:</h5>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          { authorsState
            .sort(function(a, b){
              var x = a.name.toLowerCase();
              var y = b.name.toLowerCase();
              if (x < y) {return -1;}
              if (y > x) {return 1;}
              return 0 })
            .map(author => (
              <tr key = { author._id }>
              <td> { author.name } </td>
              <td>
                <Button onClick = {() => navigate('/edit/' + author._id)}> Edit </Button> {' '}
                <Button onClick = {() => handleDelete(author._id)}> Delete </Button>
              </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListAuthor;