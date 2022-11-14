import React from 'react';
import {render, screen} from '@testing-library/react';

function TestContainer() {
  return <div>Hello World</div>;
}

describe('Confirm Test Environment Works', () => {
  it('Hello World is displayed', async () => {
    render(<TestContainer />);
    await screen.findAllByText('Hello World'); // wait for data to load
  });
});
