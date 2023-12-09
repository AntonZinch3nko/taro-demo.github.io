import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import { RoutesList } from './router/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <header className='App-header'>
                    <RoutesList />
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
