import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/style.scss';
import { isSignedIn, signOut } from '../actions/index';
import { Link } from 'react-router';

class Header extends Component {

  componentWillMount() {
    this.props.isSignedIn();
  }

  signout() {
    this.props.signOut();
  }

  renderSignInButton() {
    let signIn = <Link to={'/signin'}>Sign In</Link>;
    let logout = <Link to={'#'} onClick={(event) => {event.preventDefault(); this.signout();}}>Sign Out</Link>
    let cta = this.props.posts.auth ? logout : signIn;  
    
    return(
      <li>{cta}</li>
    );
  }

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-nav">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" href="/">a&amp;r Adventures</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#mission">Mission</a></li>
              <li><a href="#blog">Blog</a></li>
              {this.renderSignInButton()}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { isSignedIn, signOut } )(Header)
