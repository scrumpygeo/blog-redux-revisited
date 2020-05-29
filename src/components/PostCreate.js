import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Title' />
        <Field
          name='categories'
          component={this.renderInput}
          label='Category'
        />
        <Field name='content' component={this.renderInput} label='Content' />

        <button className='button ui primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // runs only if user doesn't enter a title
    errors.title = 'You must enter a title.';
  }

  if (!formValues.content) {
    errors.content = 'You must enter some content.';
  }

  return errors;
};

export default reduxForm({
  form: 'postCreate',
  validate,
})(PostCreate);
