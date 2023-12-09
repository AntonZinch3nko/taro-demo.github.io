import './App.css';
import GalleryPage from './pages/GalleryPage';

function App() {
    return (
        // <BrowserRouter>
        //     <div className='App'>
        //         <header className='App-header'>
        //             <RoutesList />
        //         </header>
        //     </div>
        // </BrowserRouter>
        <div className='App'>
            <header className='App-header'>
                <GalleryPage />
            </header>
        </div>
    );
}

export default App;
  