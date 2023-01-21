import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchView } from './search-view';

const noop = jest.fn();

describe('Search component tests', () => {
  test('should render SearchSnapshot', () => {
    const { asFragment } = render(<SearchView onSearch={noop} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call on search with userText', () => {
    const onSearch = jest.fn();
    render(<SearchView onSearch={onSearch} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, 'test');
    userEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith('test');
  });

  it('should set value to input if "searchQuery" prop exists and not empty', async () => {
    render(<SearchView onSearch={noop} searchQuery="testQuery" />);
    const inputText = screen.queryByDisplayValue('testQuery');

    expect(inputText).toBeInTheDocument();
  });
});
