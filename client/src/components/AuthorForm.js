import React, { useState } from 'react';
import { navigate } from '@reach/router';

const AuthorForm = ({ initialValues, sendApiRequest }) => {
  const [ authorState, setAuthorState ] = useState(initialValues);
  const [ errors, setErrors ] = useState([]); 

  const handleChange = e => {
    e.preventDefault();
    setAuthorState({
      ...authorState,
      [e.target.name]: e.target.value
    })
  };

  const handleCancel = e => {
    return navigate('/')
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors([]); // 

    sendApiRequest(authorState)
      .then(() => navigate('/'))
      .catch(err => {
        const arr = [];

        for (const key in err.response.data.errors) {
          arr.push(err.response.data.errors[key].message);
        }
        
        setErrors(arr);
      });
  }

  return (
    <>
      { errors.map((error, i) => (
        <p style={{color:'red'}} key={i}> { error } </p>
      ))}
      <form onSubmit = { e =>  handleSubmit (e, authorState) }>
        <label>Name</label>
        <input 
          type = 'text'
          name = 'name'
          value = { authorState.name }
          onChange = { handleChange }
          minLength= '3'
        />
        <br/>
        <button onClick = { handleCancel }> Cancel </button> {' '}
        <button type = 'submit'> Submit </button>
      </form>
    </>
  )
}

export default AuthorForm;
