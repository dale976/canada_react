import React, { Component } from 'react';
import PostList from './post_list';
import PostHeroItem from './post_hero_item';
import { Link } from 'react-router';
import Footer from '../footer';

class BlogSection extends Component {

  createPostButton(){
    return(
      <div className='add-post-button'>
        <Link to='/post/new' className='btn btn-default btn-lg post-button'>
        <span className='glyphicon glyphicon-pencil'></span> Add a post
        </Link>
      </div>
    );
  }

  createArchiveButton(){
    return(
      <div className='archive-post-button'>
        <Link to='/post/archive' className='btn btn-default btn-lg archive-button'>
        <span className='glyphicon glyphicon-list-alt'></span> Archive
        </Link>
      </div>
    );
  }

  render(){
    return (
      <div className='container-fluid blog-container' id='blog'>
        <PostHeroItem />
        {this.createPostButton()}
        <PostList />
        {this.createArchiveButton()}
        <hr />
        <Footer />
      </div>
    );
  }
}

export default BlogSection;
