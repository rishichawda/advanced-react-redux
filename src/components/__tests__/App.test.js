import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

var wrappedComponent;

beforeEach(()=>{
    wrappedComponent = shallow(<App />);
});

test('successfully renders the comment box', () => {
    // const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find(CommentBox).length).toEqual(1);
});

it('successfully renders the comments list', () => {
    // const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find(CommentList).length).toEqual(1);
});