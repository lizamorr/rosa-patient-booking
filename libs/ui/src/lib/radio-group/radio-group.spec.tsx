import { render } from '@testing-library/react';

import { RadioGroup } from './radio-group';

describe('RadioGroup', () => {
  const radioProps = {
    radioLabel: 'Is this your first appointment with this practitioner?',
    radioAnswer: 'Yes',
    onRadioChange: jest.fn(),
    radioInput: [
      {
        type: 'radio',
        label: 'Yes',
        value: 'yes',
        name: 'patientStatus',
        id: 'input-radio__yes',
      },
      {
        type: 'radio',
        label: 'No',
        value: 'no',
        name: 'patientStatus',
        id: 'input-radio__no',
      },
    ],
  };
  it('should match snapshot', () => {
    const component = render(<RadioGroup {...radioProps} />);
    expect(component).toMatchSnapshot();
  });
});
