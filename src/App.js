import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Page404 from './components/Page404';
import Header from './components/Header';
import Post from './components/Post'
import Categoria from './components/Categoria';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/post/:id' element={<Post />}/>
          <Route path='/categoria/:id/*' element={<Categoria />}/>
          <Route path='*' element={<Page404 />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
