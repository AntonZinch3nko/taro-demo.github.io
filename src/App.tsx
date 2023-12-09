import './App.css';
import { determineCurrentPage } from './router/AppRouter';

function App() {
    const currentPage = determineCurrentPage();

    return (
        <div className='App'>
            <header className='App-header'>{currentPage}</header>
        </div>
    );
}

export default App;
