import { render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  const buttonProps = {
    buttonText: 'Book Appointment',
    hasRightArrow: true,
    onClick: jest.fn(),
  };
  it('should match snapshot', () => {
    const component = render(<Button {...buttonProps} />);
    expect(component).toMatchSnapshot();
  });
});
