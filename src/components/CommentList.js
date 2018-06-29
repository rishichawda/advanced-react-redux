import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderComments = () => {
        return this.props.comments.map(
            (value, index) => {
                return <li key={index} className="list-group-item list-group-item-action mt-2">{value}</li>
            }
        );
    }

    render() {
        return (
            <ul className="list-group pt-4">
                {this.renderComments()}
            </ul>
        )
    }
}

function mapstatetoprops({ comments }) { 
    return { comments };
 }

export default connect(mapstatetoprops, null)(CommentList);