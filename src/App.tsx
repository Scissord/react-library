import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Layout, Home, Library, 
  About, NotFound, Box,
  SelectSearch, Notification,
  Tooltip, Button, Checkbox,
  Pagination, Label, Icon,
  Radio, Switch, Loader,
  Modal, Select
} from '@pages';
// import { routes } from '@constants';

const routes = [
  //pages
  { path: "/", element: <Home /> },
  { path: "/library", element: <Library /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
  //components
  { path: "/box", element: <Box/> },
  { path: '/select-search', element: <SelectSearch/> },
	{ path: '/notification', element: <Notification/> },
	{ path: '/tooltip', element: <Tooltip/> },
  { path: '/button', element: <Button/> },
	{ path: '/checkbox', element: <Checkbox/> },
	{ path: '/pagination', element: <Pagination/> },
  { path: '/label', element: <Label/> },
	{ path: '/icon', element: <Icon/> },
	{ path: '/radio', element: <Radio/> },
	{ path: '/switch', element: <Switch/> },
  { path: '/loader', element: <Loader/> },
	{ path: '/modal', element: <Modal/> },
	{ path: '/select', element: <Select/> },
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
