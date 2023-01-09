import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchView } from './search';

const noop = jest.fn();

describe('Search', () => {
  test('renders SearchSnapshot', () => {
    const { asFragment } = render(<SearchView onSearch={noop} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call on search with userText', () => {
    const onSearch = jest.fn();
    render(<SearchView onSearch={onSearch} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test');
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith('test');
  });

  it('should set value to input if searchQuery', async () => {
    render(<SearchView onSearch={noop} searchQuery="testQuery" />);
    const inputText = screen.queryByDisplayValue('testQuery');

    expect(inputText).toBeInTheDocument();
  });
});
