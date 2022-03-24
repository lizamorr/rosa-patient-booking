import { render } from '@testing-library/react';

import Select from './select';

describe('Select', () => {
  const selectProps = {
    selectLabel: 'What is the reason for your visit?',
    placeholder: 'Select a motive',
    options: [
      {
        value: '61eea367ddf6c500149ae2cc',
        label: 'Cultural fit',
        meetingDuration: 30,
      },
      {
        value: '61eea350ddf6c500149ae2cb',
        label: 'Technical assessment',
        meetingDuration: 75,
      },
      {
        value: '61379ba159d4940022b6c929',
        label: 'Introduction Call',
        meetingDuration: 30,
      },
    ],
    onSelectionChange: jest.fn(),
    selectedOption: '61eea367ddf6c500149ae2cc',
  };
  it('should match snapshot', () => {
    const component = render(<Select {...selectProps} />);
    expect(component).toMatchSnapshot();
  });
});
