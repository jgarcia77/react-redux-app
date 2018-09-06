import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    const props = {
        course: {}, 
        saving: saving, 
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };
    
    return shallow(<CourseForm {...props}></CourseForm>);
}

describe('course form tests via enzyme', () => {
    it('renders form and h1 via enzyme', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toBe('Manage Course');
    });

    it('save button when not saving via enzyme', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button when saving via enzyme', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});