import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { connect } from 'react-redux';
import * as actions from 'actions';

class App extends Component {
    authbuttons() {
        return (
            <div>
                { 
                    this.props.auth &&
                     <button className="btn btn-warning" onClick={()=>{
                         this.props.changeAuthenticationState(false);
                        }}>Sign Out</button> 
                    }
                {
                    !this.props.auth && 
                    <button className="btn btn-success" onClick={()=>{
                        this.props.changeAuthenticationState(true);
                        }}>Sign In</button>
                }
            </div>
        );
    }

    header() {
        return (
            <nav className="navbar navbar-expand bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/post">Post</Link></li>
                </ul>
                    { this.authbuttons() }
            </nav>
        )
    }
    render() {
        return (
            <div className="container p-3">
                { this.header() }
                <Route path="/post" component={CommentBox}/>
                <Route exact path="/" component={CommentList}/>
            </div>
        );
    }
}


function mapstatetoprops({ auth }) { 
    return { auth };
 }

export default connect(mapstatetoprops, actions)(App);