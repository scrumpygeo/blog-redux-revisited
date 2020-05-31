import React, { Fragment } from 'react';
import Modal from '../components/Modal';
import history from '../history';

const PostDelete = () => {
  const actions = (
    <Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </Fragment>
  );

  return (
    <div>
      PostDelete
      <Modal
        title='Delete Post'
        content='Are you sure you want to delete this post?'
        actions={actions}
        onDismiss={() => {
          history.push('/');
        }}
      />
    </div>
  );
};

export default PostDelete;
