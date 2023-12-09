import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import { RoutesList } from './router/AppRouter';

function App() {
    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <RoutesList />
                </header>
            </div>
        </Router>
    );
}

export default App;
  