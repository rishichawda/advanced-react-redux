import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => { 
    class EnhancedComponent extends Component {

        componentDidMount() {
            this.checkAuth();
        }
    
        componentDidUpdate() {
            this.checkAuth();
        }
    
        checkAuth() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }

    function mapstatetoprops({auth}) { 
        return { auth };
     }

    return connect(mapstatetoprops)(EnhancedComponent);
 }