import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { signIn } from '../actions/index';
import { Link } from 'react-router';

class UserLogin extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.signIn(props)
        .then(() => {
            // blog post created, navigate the user to the index
            this.context.router.push('/');
        });
    }

    render() {

        const { fields: {
        email,
        password
        }, handleSubmit } = this.props;

        return(
            <form className='container-fluid create-post' onSubmit={handleSubmit(this.onSubmit.bind(this)) }>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='text' className='form-control' {...email}/>
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control' {...password}/>
                </div>

                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
        )
    }

}

export default reduxForm({
  form: 'UserLogin',
  fields: ['email', 'password']
}, null, { signIn })(UserLogin);

