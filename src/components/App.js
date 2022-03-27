import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Pages from './Pages';


function App() {
  return (
    <Router>
    <div className="App">
        <Navigation />
        <Pages/>
    </div>
    </Router>
  );
}

export default App;
