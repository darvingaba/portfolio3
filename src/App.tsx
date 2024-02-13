import { useEffect, useState } from 'react'
import './App.css'
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import HashLoader from "react-spinners/HashLoader";


function App() {
const [loading,setLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },3500)
},[])

  return (
    <div className="App dark:ring-primary-900">
      {loading ? (
        <HashLoader
          color={"#808080"}
          loading={loading}
          size={35}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
      ) : (
        <>
          <Nav />
          <Hero />
          <Projects />
          <Content />
          <Content />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App
