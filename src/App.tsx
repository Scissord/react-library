import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Home, Library, About, NotFound } from '@pages';
// import { routes } from '@constants';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/library", element: <Library /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
]

// const routes = [
//   ...require('./constants/routes/routes').default,
// ]

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
