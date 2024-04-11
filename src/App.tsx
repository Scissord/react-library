import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Layout, Home, Library, 
  Faq, NotFound, BoxPage,
  SelectSearchPage, NotificationPage,
  TooltipPage, ButtonPage, CheckboxPage,
  PaginationPage, LabelPage, IconPage,
  RadioPage, SwitchPage, LoaderPage,
  ModalPage, SelectPage, OpenPage,
  StatusBarPage, SliderPage, GradientPage,
  ListPage
} from '@pages';
// import { routes } from '@constants';

// const routes = [
//   ...require('./constants/routes/routes').default,
// ]

const routes = [
  // pages
  { path: "/", element: <Home /> },
  { path: "/library", element: <Library /> },
  { path: "/about", element: <Faq /> },
  { path: "*", element: <NotFound /> },
  // components
  { path: "/box", element: <BoxPage/> },
  { path: '/select-search', element: <SelectSearchPage/> },
	{ path: '/notification', element: <NotificationPage/> },
	{ path: '/tooltip', element: <TooltipPage/> },
  { path: '/button', element: <ButtonPage/> },
	{ path: '/checkbox', element: <CheckboxPage/> },
	{ path: '/pagination', element: <PaginationPage/> },
  { path: '/label', element: <LabelPage/> },
	{ path: '/icon', element: <IconPage/> },
	{ path: '/radio', element: <RadioPage/> },
	{ path: '/switch', element: <SwitchPage/> },
  { path: '/loader', element: <LoaderPage/> },
	{ path: '/modal', element: <ModalPage/> },
	{ path: '/select', element: <SelectPage/> },
  // animations 
  { path: '/open-animation', element: <OpenPage/>,  },
	{ path: '/slider-animation', element: <SliderPage/> },
	{ path: '/status-bar-animation', element: <StatusBarPage/> },
  { path: '/gradient-animation', element: <GradientPage/> },
  { path: '/list-animation', element: <ListPage/> },
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
