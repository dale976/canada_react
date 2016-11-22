import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class PostItem extends Component {

  render() {
    return (
      <li className="list-group-item">

        <Link to={'post/' + this.props.id}>
            {this.props.title}
        </Link>

      </li>
    );
  }
}

export default connect(null, actions)(PostItem);
