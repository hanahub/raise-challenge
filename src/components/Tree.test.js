import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Tree from './Tree';

const validData = { value: "X", children: [ { value: "Y" }, { value: "Z", children: [] } ]};
const validExpectedData = ["X", "Y", "Z", "Q"];

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = { value: "X", children: [] };
  ReactDOM.render(<Tree data={validData} />, div);
});

describe('serialization', () => {
  const tree = shallow(<Tree data={validData} />);
  const serialized = tree.instance().serialize(validData);

  it('produces a serialized string', () => {
    expect(typeof serialized).toBe('string');
  });

  it('produces a serialized string containing all the expected data', () => {
    const validRegexp = new RegExp(validExpectedData.join(".*?"));
    expect(serialized).toMatch(validRegexp);
  });
});
