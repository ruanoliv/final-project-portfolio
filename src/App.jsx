import React from 'react'
import Header from './components/Header/';
import Footer from './components/Footer';
import Routers from './Routers';

export default function App() {

  return (
    <div className='container'>
      <Header />
      <Routers />
      <Footer />
    </div>
  )
}