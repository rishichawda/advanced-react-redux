import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'root';
import App from 'components/App';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { body: 'Fetched Comment 1' },
            { body: 'Fetched Comment 2' }
        ]
    })
});

afterEach(()=>{
    moxios.uninstall();
})

it('success fetch comments and display', ()=>{
    const wrappedComponent = mount(
        <Root>
            <App />
        </Root>
    );

    wrappedComponent.find('.btn-info').simulate('click');
    moxios.wait(()=>{
        wrappedComponent.update();
        expect(wrappedComponent.find('li').length).toEqual(2);
    })

    wrappedComponent.unmount();
})