import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import { RoutesList } from './router/AppRouter';
import { Box } from '@chakra-ui/react';

function App() {
    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <Box p={3}>
                        <RoutesList />
                    </Box>
                </header>
            </div>
        </Router>
    );
}

export default App;
