import './App.css';
import ImageGrid from './components/ImageSlider/ImageGrid';

function App() {
  const images = [
    '/img/deck/Chariot.png', 
    '/img/deck/Fool.png',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ImageGrid images={images} />
      </header>
    </div>
  );
}

export default App;
