import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbook from './component/Addbook';
import Booksearch from './component/Booksearch';

function App() {
  return (
    <div >
      <Addbook/>
      <Booksearch/>
    </div>
  );
}

export default App;
