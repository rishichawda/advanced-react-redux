import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'root';

let wrappedComponent;

beforeEach(()=>{
    wrappedComponent = mount(
        <Root>
            <CommentBox/>
        </Root>
);
});

afterEach(()=>{
    wrappedComponent.unmount();
});

it('has textarea and button', ()=>{
    expect(wrappedComponent.find('textarea').length).toEqual(1);
    expect(wrappedComponent.find('button').length).toEqual(2);
});

describe('text area', ()=>{

    beforeEach(()=>{
        wrappedComponent.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        });
        wrappedComponent.update();
    });

    it('has text area that can be typed in', ()=>{
        expect(wrappedComponent.find('textarea').prop('value')).toEqual('new comment');
    });

    it('form submitted, text area is emptied', ()=>{
        // expect(wrappedComponent.find('textarea').prop('value')).toEqual('new comment');
        wrappedComponent.find('form').simulate('submit');
        wrappedComponent.update();
        expect(wrappedComponent.find('textarea').prop('value')).toEqual('');
    });

});
