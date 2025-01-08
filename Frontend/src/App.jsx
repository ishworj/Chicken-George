import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Header from './components/Header'
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';

function App() {


  return (
    <div className='wrapper'>
    <Header />
    {/* <Hero /> */}
    <Menu />

    {/* <About /> */}
    <Footer />
    </div>
  )
}

export default App
