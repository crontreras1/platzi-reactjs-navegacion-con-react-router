import { HashRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './Menu'
import { AuthProvider } from './auth'
import { HomePage } from './HomePage'
import { BlogPage } from './BlogPage'
import { LoginPage } from '../src/LoginPage'
import { LogoutPage } from '../src/LogoutPage'
import { ProfilePage } from './ProfilePage'
import { BlogPost } from './BlogPost'
import { AuthRoute } from './auth'

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={ <HomePage />} />

            <Route path='/blog' element={ <BlogPage />}>          
              <Route path=':slug' element={ <BlogPost />} />
            </Route>

            <Route path='/login' element={ <LoginPage />} />

            <Route 
              path='/logout'
              element={ 
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            
            <Route 
              path='/profile'
              element={ 
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            
            // * Simboliza todas las rutas que no se han definido aún y podemos mostrar un error o algo por el estilo
            <Route path='/*' element={ <h1>Página No Encontrada 😰</h1> } />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
