import { render } from '@testing-library/react';

import { RadioGroup } from './radio-group';

describe('RadioGroup', () => {
  xit('should render successfully', () => {
    const { baseElement } = render(<RadioGroup />);
    expect(baseElement).toBeTruthy();
  });
});
