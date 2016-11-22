import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';
import { Link } from 'react-router';

class PostNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post created, navigate the user to the index
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: {
      title,
      content,
      image
    }, handleSubmit } = this.props;

    return (
      <form className='container-fluid create-post' onSubmit={handleSubmit(this.onSubmit.bind(this)) }>
        <h3>Create a new post</h3>
        <div className={ `form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type='text' className='form-control' {...title}/>
          <div className='textHelp'>
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={ `form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className='form-control' {...content}/>
          <div className='textHelp'>
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>

        <input type='file' className='btn btn-secondary' {...image} value={null} />
      </form>

    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a valid title'
  }

  if (!values.content) {
    errors.content = 'Enter some content'
  }

  return errors;
}

// redux-form contains connect as part of the package, the only difference is that the 1st argument in redux-form is form config.
// It needs 3 arguments, form config, mapStateToProps, mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'content', 'image'],
  validate
}, null, { createPost })(PostNew);
