import ReactDOM from 'react-dom';
import App from './App';
import CartProvider from './store/CartProvider';

ReactDOM.render(<CartProvider><App /></CartProvider>, document.getElementById('root'));

