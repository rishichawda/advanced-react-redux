import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'root';

let wrappedComponent;
const initialState = { comments: ['Comment 1', 'Comment 2'] };

beforeEach(() => {
    wrappedComponent = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    );
});

it('creates list element for each comment', ()=>{
    expect(wrappedComponent.find('li').length).toEqual(initialState.comments.length);
});

it('shows text for each comment list item', ()=>{
    expect(wrappedComponent.render().text()).toContain(initialState.comments[0]);
    expect(wrappedComponent.render().text()).toContain(initialState.comments[1]);
});