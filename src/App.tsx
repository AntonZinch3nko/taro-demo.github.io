import './App.css';
import ImageGrid from './components/ImageSlider/ImageGrid';

function App() {
  const images = [
    process.env.NODE_ENV === 'development'
      ? '/img/deck/Chariot.png'
      : 'https://antonzinch3nko.github.io/taro-demo.github.io/img/deck/Chariot.png',
    process.env.NODE_ENV === 'development'
      ? '/img/deck/Lovers.png'
      : 'https://antonzinch3nko.github.io/taro-demo.github.io/img/deck/Lovers.png',
    process.env.NODE_ENV === 'development'
      ? '/img/deck/Fool.png'
      : 'https://antonzinch3nko.github.io/taro-demo.github.io/img/deck/Fool.png',
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
