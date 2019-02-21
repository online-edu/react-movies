import React from 'react';
import { shallow, mount } from 'enzyme';
import Switch from '../Switch';

describe('<Switch />', () => {
    const onSwitchClick = jest.fn();
    const wrapper = (
        <Switch
            id="enLangFilter"
            label="Original Language"
            switchToggle={onSwitchClick}
        />
    );

    it('renders correctly', () => {
        const component = shallow(wrapper);
        expect(component).toMatchSnapshot();
    });

    it('contains class name "custom-control, custom-switch" ', () => {
        const component = shallow(wrapper);
        expect(component.find('.custom-control')).toHaveLength(1);
        expect(component.find('.custom-switch')).toHaveLength(1);
    });

    it('allows us to set props', () => {
        const component = mount(wrapper);
        expect(component.props().label).toEqual('Original Language');
        component.setProps({ label: 'Adult' });
        expect(component.props().label).toEqual('Adult');
    });
});
