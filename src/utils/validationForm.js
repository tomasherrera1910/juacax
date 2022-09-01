const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    }
    
    if (!values.password) {
        errors.password = 'Required';
      }
    return errors;
  }
  export default validate