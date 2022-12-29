import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/clients/pages/Home';





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
