import './App.css';
import ImageGrid from './components/ImageSlider/ImageGrid';

function getImageUrl(imageName: string) {
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ? '/img/deck/'
            : 'https://antonzinch3nko.github.io/taro-demo.github.io/img/deck/';
    return `${baseUrl}${imageName}.png`;
}

function App() {
    const images = [
        getImageUrl('Fool'),
        getImageUrl('Magician'),
        getImageUrl('Pristess'),
        getImageUrl('Empress'),
        getImageUrl('Emperor'),
        getImageUrl('Hierophant'),
        getImageUrl('Lovers'),
        getImageUrl('Chariot'),
        getImageUrl('Strength'),
        getImageUrl('Hermit'),
        getImageUrl('Wheel'),
        getImageUrl('Justice'),
        getImageUrl('Hunged_man'),
        getImageUrl('Death'),
        getImageUrl('Temperance'),
        getImageUrl('Devil'),
        getImageUrl('Tower'),
    ];

    return (
        <div className='App'>
            <header className='App-header'>
                <ImageGrid images={images} />
            </header>
        </div>
    );
}

export default App;
