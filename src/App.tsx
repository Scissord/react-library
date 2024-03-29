import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Home, Library, About, NotFound } from '@pages';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/library", element: <Library /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
]

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={<Layout display={route.element}/>} 
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
