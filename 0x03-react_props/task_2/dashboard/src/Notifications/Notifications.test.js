import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

it('renders without crashing', () => {
  shallow(<Notifications />);
});
/*
it('renders three list items', () => {
  expect(wrapper.find('NotificationItem').children().length).toEqual(3);
});
*/
it('renders the <p>', () => {
  expect(
    wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
  ).toBeTruthy();
});
/*
it('renders first list item', () => {
  expect(wrapper.first().html()).toEqual(
    '<li data-notification-type="default">New course available</li>'
  );
});
*/
