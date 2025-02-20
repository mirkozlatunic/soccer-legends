import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Hero />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
