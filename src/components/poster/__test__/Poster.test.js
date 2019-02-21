import React from 'react';
import { shallow, mount } from 'enzyme';
import Poster from '../Poster';

describe('<Poster />', () => {
    const onPosterClick = jest.fn();
    const wrapper = (
        <Poster
            id={399579}
            name="Alita: Battle Angel"
            click={onPosterClick}
            url="xRWht48C2V8XNfzvPehyClOvDni.jpg"
        />
    );
    it('renders correctly', () => {
        const component = shallow(wrapper);
        expect(component).toMatchSnapshot();
    });

    it('contains  <img /> tag', () => {
        const component = shallow(wrapper);
        expect(component.find('img')).toHaveLength(1);
    });

    it('allows us to set props', () => {
        const component = mount(wrapper);
        expect(component.props().name).toEqual('Alita: Battle Angel');
        component.setProps({ name: 'Creed II' });
        expect(component.props().name).toEqual('Creed II');
    });

    it('simulates click/keydown events', () => {
        const component = shallow(wrapper);
        component.find('button').simulate('click');
        component.find('button').simulate('keyPress');
        expect(onPosterClick).toHaveBeenCalledTimes(2);
    });
});
