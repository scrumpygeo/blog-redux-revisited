import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostEdit extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return <div>{this.props.post.title}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost })(PostEdit);
