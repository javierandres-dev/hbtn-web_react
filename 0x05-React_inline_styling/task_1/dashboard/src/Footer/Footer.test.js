import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);
  it('render without crashing', () => {
    expect(wrapper.exists());
  });
});
