// SignIn.js
import React from 'react';

class SignIn extends React.Component {
    render() {
        return (
            <div id="sign-in">
                <form id="log_in" onSubmit={this.props.onSubmit}>
                    <h2 id="sign_in">SIGN-IN</h2>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="password" />

                    <input type="submit" value="Log-in" style={{ marginTop: '5px', marginBottom: '5px' }} />
                </form>
            </div>
        );
    }
}

export default SignIn;
