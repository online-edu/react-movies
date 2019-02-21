import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';
import Button from '../../button';
import Switch from '../../switch';

describe('<Filter />', () => {
    it('renders correctly', () => {
        const component = shallow(
            <Filter onChange={jest.fn()} />,
        );
        expect(component).toMatchSnapshot();
    });

    it('renders two <Button /> components', () => {
        const wrapper = shallow(
            <Filter onChange={jest.fn()} />,
        );
        expect(wrapper.find(Button)).toHaveLength(2);
    });

    it('renders two <Switch /> components', () => {
        const wrapper = shallow(
            <Filter onChange={jest.fn()} />,
        );
        expect(wrapper.find(Switch)).toHaveLength(2);
    });

    it('expects "event" from dom objeect', () => {
        const wrapper = shallow(<Filter onChange={jest.fn()} />);
        const e = {
            target: {
                checked: true,
                type: 'checkbox',
                name: 'adultFilter',
            },
        };
        wrapper.instance().handleInputChange(e);
        expect(wrapper.state().adultFilter).toBe(true);
    });

    it('triggers "filterChange" on "apply" click', () => {
        const onFilterChange = jest.fn();
        const wrapper = shallow(<Filter onChange={onFilterChange} />);
        wrapper.instance().onFilterChange();
        wrapper.simulate('onChange');
        expect(onFilterChange).toHaveBeenCalled();
        expect(onFilterChange).toHaveBeenCalledTimes(1);
        expect(onFilterChange).toHaveBeenCalledWith({
            adult: false,
            vote_average: 0,
        });
    });
});
