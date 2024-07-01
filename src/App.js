import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Movielist from './components/Movielist';

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <main id="main" class="main">
        <Movielist />
      </main>

      <Footer />
    </>
  );
}

export default App;
