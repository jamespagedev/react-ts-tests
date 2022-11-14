import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const btnText = 'Click Me';
const displayDefaultButtonTextBeforeClick = 'strParentState: ""';
const displayDefaultButtonTextAfterClick = 'strParentState: "Default Button"';
const mockUpdateParentStateFn = jest.fn();
function TestContainer(): JSX.Element {
  return <App />;
}

// ===========================================================================
// =============================== start tests ===============================
// ===========================================================================
describe('DefaultButton', () => {
  it('matches snapshot', () => {
    const {container} = render(<TestContainer />);
    expect(container).toMatchSnapshot();
  });
  it('default button click updates text', async () => {
    const testComponent = render(<TestContainer />);
    const defaultBtn = testComponent.getByRole('button', {name: btnText});
    const displayTextBeforeClick = testComponent.getByText(displayDefaultButtonTextBeforeClick);
    expect(displayTextBeforeClick).toBeInTheDocument();
    await userEvent.click(defaultBtn);
    const displayTextAfterClick = testComponent.getByText(displayDefaultButtonTextAfterClick);
    expect(displayTextAfterClick).toBeInTheDocument();
  });
});
