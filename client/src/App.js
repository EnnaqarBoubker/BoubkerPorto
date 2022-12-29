import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './components/admin/LayoutAdmin';
import Home from './components/clients/pages/Home';
import DashAdmin from './components/admin/Admin/DashAdmin';






function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<LayoutAdmin />}>
        <Route path='/admin' element={<DashAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
