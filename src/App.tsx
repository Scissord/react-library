import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Library, About, NotFound } from '@pages';

function App() {
  // i need here layout
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
