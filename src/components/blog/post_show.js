import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/index';
import { deletePost } from '../../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        let imageElement;

        if (!this.props.post) {
            return <div>loading...</div>
        }

        if (this.props.post.img) {
            imageElement = <img src={this.props.post.img} className='img-responsive post-show-image'/>;
        }

        return (
            <div className='container-fluid post-show'>
                <Link to={'/'}>Back to Home</Link>
                <button className='btn btn-danger pull-right'
                    onClick={this.onDeleteClick.bind(this) }>
                    Delete Post
                </button>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.content}</p>
                <hr />
                {imageElement}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
