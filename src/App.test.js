import { render, screen } from '@testing-library/react';
import App from './App';
import { ReactDOM } from 'react-dom';

test('renders learn react link', () => {
    const div = document.createElement('div')
    ReactDOM.reder(<App />, div)
    ReactDOM.unmountComponentAtNote(div)
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
 