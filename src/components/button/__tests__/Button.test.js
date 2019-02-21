import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
    const onButtonClick = jest.fn();
    it('renders correctly', () => {
        const component = shallow(
            <Button label="Filter" click={onButtonClick} />,
        );
        expect(component).toMatchSnapshot();
    });

    it('contains class name "btn" ', () => {
        const wrapper = shallow(<Button label="Test" click={onButtonClick} />);
        expect(wrapper.find('.btn')).toHaveLength(1);
    });

    it('simulates click events', () => {
        const wrapper = shallow(<Button label="Test" click={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).toHaveBeenCalledTimes(1);
    });
});
