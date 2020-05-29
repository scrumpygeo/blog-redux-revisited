import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostCreate extends Component {
  renderInput = ({ input, label }) => {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  render() {
    return (
      <form className='ui form'>
        <Field name='title' component={this.renderInput} label='Title' />
        <Field
          name='categories'
          component={this.renderInput}
          label='Category'
        />
        <Field name='content' component={this.renderInput} label='Content' />
      </form>
    );
  }
}

export default reduxForm({
  form: 'postCreate',
})(PostCreate);
