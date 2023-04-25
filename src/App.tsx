import { useState } from 'react'
import './App.css'
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="App dark:ring-primary-900">
      <Nav />
      <Hero />
      <Projects/>
      <Content />
      <Content />
      <Footer />
    </div>
  );
}

export default App
