import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../Modal';
import Button from '../../button';

describe('<Modal />', () => {
    const onModalClose = jest.fn();
    const wrapper = (
        <Modal show title="Header" onHide={onModalClose}>
            <div>Content</div>
        </Modal>
    );

    it('renders correctly', () => {
        const component = shallow(wrapper);
        expect(component).toMatchSnapshot();
    });

    it('contains class name "movie-modal" ', () => {
        const component = shallow(wrapper);
        expect(component.find('.movie-modal')).toHaveLength(1);
    });

    it('renders a <Button /> component', () => {
        const component = shallow(wrapper);
        expect(component.find(Button)).toHaveLength(1);
    });

    it('allows us to set props', () => {
        const component = mount(wrapper);
        expect(component.props().show).toBe(true);
        component.setProps({ show: false });
        expect(component.props().show).toBe(false);
    });
});
