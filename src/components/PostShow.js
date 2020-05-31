import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    const { title, categories, content } = this.props.post;

    return (
      <div className='ui text container segment'>
        <h1 className='ui huge header'>{title}</h1>

        <h5>Category: {categories}</h5>
        <p className='ui text segment'>{content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost })(PostsShow);
