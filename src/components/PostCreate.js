import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

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

  onSubmit = (formValues) => {
    this.props.createPost(formValues);
  };

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

  if (!formValues.category) {
    // runs only if user doesn't enter a title
    errors.category = 'You must enter a category.';
  }

  if (!formValues.content) {
    errors.content = 'You must enter some content.';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'postCreate',
  validate,
})(PostCreate);

export default connect(null, { createPost })(formWrapped);
