import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'
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

export default reduxForm({
  form: 'postCreate',
})(PostCreate);
