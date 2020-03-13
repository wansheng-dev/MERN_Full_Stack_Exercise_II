import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Paper } from '@material-ui/core';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = props => {
  const [ authorState, setAuthorState ] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' + props.id)
      .then(response => setAuthorState(response.data))
      .catch(console.log)
  }, [props.id]);

  const sendApiRequest = (data) => {
    return axios.put('http://localhost:8000/api/authors/update/' + props.id, data)
  }


  if (authorState === null ){
    return (
      <>
        <h1>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h1>
        <Link to = '/new'> Add an Author </Link>
      </>
    )
  };

  return (
    <>
      <Paper elevation={4}>
        <h1>Favorite authors</h1>
      </Paper>
      <Link to='/'>Home</Link>
      <h5>Edit this author:</h5>
      <AuthorForm
      initialValues = {{
        name: authorState.name
      }}
      sendApiRequest = { sendApiRequest }
      />
    </>
  )
}

export default EditAuthor;