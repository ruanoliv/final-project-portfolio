import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routers from './Routers';

export default function App() {

  return (
    <div className='container'>
      <Header />
        <Routers/>
      <Footer />
    </div>
  )
}