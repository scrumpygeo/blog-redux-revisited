import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        // jsx
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
