import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import history from '../history';
import { fetchPost } from '../actions';

class PostDelete extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderActions() {
    return (
      <Fragment>
        <button className='ui button negative'>Delete</button>
        <button className='ui button'>Cancel</button>
      </Fragment>
    );
  }

  renderContent() {
    if (!this.props.post) {
      return 'Are you sure you want to delete this post?';
    }
    return `Are you sure you want to delete the post with title: ${this.props.post.title}`;
  }

  render() {
    return (
      <Modal
        title='Delete Post'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push('/');
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost })(PostDelete);
