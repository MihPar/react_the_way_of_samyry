import SumurayJSApp from './App';
import { ReactDOM } from 'react-dom';

it('renders learn react link', () => {
    const div = document.createElement('div')
    ReactDOM.reder(<SumurayJSApp />, div)
    ReactDOM.unmountComponentAtNote(div)
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
 