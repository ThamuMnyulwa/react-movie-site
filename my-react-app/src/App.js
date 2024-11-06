import './App.css';
import './styles.css';// Import style from the css
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

function App() {
  return (
    <><div className="App">
      {/* Header component in the container, the container controls the width*/}
      <div className='container'>
        {/* Please note thus uses the uppercase and places the header component. */}
        <Header />

        {/* MoviesGrid component in the container */}
        <MoviesGrid />

      </div>
      {/* Footer component and include it in the App component but outside of the container. */}
    </div><Footer />
    </>
  );
}

export default App;
