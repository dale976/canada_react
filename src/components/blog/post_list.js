import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import PostItem from './post_item';

class PostList extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

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

  renderListItem(data) {
    return (
      <li className="list-group-item">
        {data.title}
      </li>
    );
  }

  render() {
    return (
      <div className='post-list-container'>
        <ul className="list-group">
          {this.parsePosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, actions)(PostList)
