import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Paper } from '@material-ui/core';
import AuthorForm from '../components/AuthorForm';

const AddAuthor = () => {

  const sendApiRequest = (data) => {
    return axios.post('http://localhost:8000/api/authors/create', data);
  }

  return (
    <>
      <Paper elevation={4}>
        <h1>Favorite authors</h1>
      </Paper>
      <Link to='/'>Home</Link>
      <h5>Add a new author:</h5>
      <AuthorForm
        initialValues = {{
          name: ''
        }}
        sendApiRequest = { sendApiRequest }
      />
    </>
  )
}

export default AddAuthor;