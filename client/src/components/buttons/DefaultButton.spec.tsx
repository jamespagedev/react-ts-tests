import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DefaultButton from './DefaultButton';

// -------------------------------- containers -------------------------------
function TestContainer(): JSX.Element {
  return <DefaultButton />;
}

// ===========================================================================
// =============================== start tests ===============================
// ===========================================================================
describe('DefaultButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('matches snapshot', () => {
    const {container} = render(<TestContainer />);
    expect(container).toMatchSnapshot();
  });
  it('click invokes mockHandleButtonFunctionClickFn function', () => {
    const userViewing = userEvent.setup();
    render(<TestContainer />);
  });
});
