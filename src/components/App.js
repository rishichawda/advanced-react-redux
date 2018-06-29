import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
    return (
        <div className="container p-3">
            <CommentBox />
            <CommentList />
        </div>
    );
}