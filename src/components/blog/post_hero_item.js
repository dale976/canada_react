import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class PostHeroItem extends Component {

  componentWillMount() {
    this.props.fetchPostHeroItem();
  }

  render() {

    if (!this.props.heroItem) {
      return (
        <div> loading ... </div>
      );
    }

    let item = _.toArray(this.props.heroItem);
    let imageElement;

    {
      Object.keys(this.props.heroItem).map(function (key, index) {
        item[index].key = key
      })
    };

    if (item[0].img) {
      imageElement = <Link to={'post/' + item[0].key} > <img className='hero-item-image' src={item[0].img} /> </Link>;
    }

    return (
      <div className='hero-item-container'>
        <Link to={'post/' + item[0].key} >
          <h3 className='hero-item-title'>{item[0].title}</h3>
        </Link>
        <p className='hero-item-content' >{item[0].content}</p>
        <div className='post-image'>
          {imageElement}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { heroItem: state.posts.heroItem };
}

export default connect(mapStateToProps, actions)(PostHeroItem)
