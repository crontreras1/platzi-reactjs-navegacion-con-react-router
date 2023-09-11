import { HashRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './Menu'
import { HomePage } from './HomePage'
import { BlogPage } from './BlogPage'
import { ProfilePage } from './ProfilePage'
import { BlogPost } from './BlogPost'

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path='/' element={ <HomePage />} />

          <Route path='/blog' element={ <BlogPage />} />          
          <Route path='/blog/:slug' element={ <BlogPost />} />

          <Route path='/profile' element={ <ProfilePage />} />
          
          // * Simboliza todas las rutas que no se han definido aún y podemos mostrar un error o algo por el estilo
          <Route path='/*' element={ <h1>Página No Encontrada 😰</h1> } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
