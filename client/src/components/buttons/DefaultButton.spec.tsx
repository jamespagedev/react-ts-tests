import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DefaultButton from './DefaultButton';

// ===========================================================================
// =============================== setup tests ===============================
// ===========================================================================
// -------------------------------- variables --------------------------------
const btnText = 'Click Me';

// ------------------------------ mock functions -----------------------------
const mockUpdateParentStateFn = jest.fn();
const logSpy = jest.spyOn(console, 'log');
// ---------------------------------- types ----------------------------------
interface TestContainerProps {
  btnText: string;
}

// -------------------------------- containers -------------------------------
function TestContainer({btnText}: TestContainerProps): JSX.Element {
  return <DefaultButton btnText={btnText} updateParentState={mockUpdateParentStateFn} />;
}

// ===========================================================================
// =============================== start tests ===============================
// ===========================================================================
describe('DefaultButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('matches snapshot', () => {
    const {container} = render(<TestContainer btnText={btnText} />);
    expect(container).toMatchSnapshot();
  });
  it('click invokes mockHandleButtonClickFn function', () => {
    render(<TestContainer btnText={btnText} />);
    const btn = screen.getByText(btnText);
    userEvent.click(btn);
    expect(mockUpdateParentStateFn).toHaveBeenCalledTimes(1);
  });
  it('click ensures console.log runs', () => {
    render(<TestContainer btnText={btnText} />);
    const btn = screen.getByText(btnText);
    userEvent.click(btn);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});
