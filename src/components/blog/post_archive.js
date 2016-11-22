import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/index';
import PostItem from './post_item';
import { Link } from 'react-router';

class PostArchive extends Component {
  componentWillMount() {
    this.props.fetchAllPosts();
  };

  parsePosts() {
    if (!this.props.posts.all) {
      return (
        <div> loading ... </div>
      );
    }

    let posts = _.toArray(this.props.posts.all);

    {
      Object.keys(this.props.posts.all).map(function (key, index) {

        posts[index].key = key;
      })
    };

    return posts.splice(0, posts.length -1).reverse().map((post) => {
      return (
        <PostItem title={post.title} id={post.key} key={post.key} />
      );
    });
  }

  render() {
    return (
      <div className='container-fluid post-archive'>
          <Link to={'/'}>Back to Home</Link>
          <div className='post-list-container archive-list'>
            <ul className="list-group">
              {this.parsePosts() }
            </ul>
          </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchAllPosts })(PostArchive)
