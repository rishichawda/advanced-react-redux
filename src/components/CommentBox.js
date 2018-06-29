import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { 
        comment: ''
     };

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

    handleChange = (e) => {
        this.setState({ 
            comment: e.target.value
         })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ 
            comment: ''
         })
    }

    render() {
        return (
            <form className="w-50" onSubmit={this.handleSubmit}>
                <label className="form-group">Enter comment :</label>
                <textarea className="form-control" placeholder="Type your comment.." value={this.state.comment} onChange={this.handleChange}></textarea>
                <button className="btn btn-success mt-2" type="submit">Comment</button>
                <button className="btn btn-info mt-2 ml-2" type="button" onClick={this.props.fetchComments}>Fetch comments</button>
            </form>
        );
    }
}

function mapstatetoprops({auth}) { 
    return { auth };
 }

export default connect(mapstatetoprops, actions)(CommentBox);