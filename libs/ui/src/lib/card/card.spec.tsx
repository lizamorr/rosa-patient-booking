import { render } from '@testing-library/react';
import Card from './card';

describe('Card', () => {
  const cardProps = {
    cardHeader: 'Find availabilities',
    cardContent: <></>,
  };
  it('should match snapshot', () => {
    const component = render(<Card {...cardProps} />);
    expect(component).toMatchSnapshot();
  });
});
