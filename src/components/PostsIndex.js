import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderAdmin(post) {
    return (
      <div className='right floated content'>
        <button className='ui button primary'>Edit</button>
        <button className='ui button negative'>Delete</button>
      </div>
    );
  }

  renderList() {
    // sort by id so latest at top of list
    this.props.posts.sort(function (a, b) {
      return b.id - a.id;
    });

    return this.props.posts.map((post) => {
      return (
        // jsx
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>
                {' '}
                <strong>{post.title}</strong>
              </h2>
              {this.renderAdmin(post)}
              <p>Category: {post.categories}</p>
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
  return { posts: Object.values(state.posts) }; // convert object to array so we can map thru
};

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
