import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './components/admin/LayoutAdmin';
import Home from './components/clients/pages/Home';
import DashAdmin from './components/admin/Admin/DashAdmin';
import Project from './components/admin/Admin/Project';
import NotFound from './components/404';

import Login from './components/admin/Auth/Login';
import RequireAuth from './Utils/RequireAuth';
import ForgetPassword from './components/admin/Auth/ForgetPassword';
import ResetPassword from './components/admin/Auth/ResetPassword';
import EditProject from './components/admin/Admin/EditProject';
import BlogsDetails from './components/clients/component/BlogsDetails';
import Layout from './components/clients/component/Layout';
import Blogs from './components/admin/Admin/Blogs';














function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/blogsDetails/:id" element={<BlogsDetails />} />
      </Route>


      <Route element={<RequireAuth Roles={["admin"]} />}>
        <Route element={<LayoutAdmin />}>
          <Route path='/admin' element={<DashAdmin />} />
          <Route path='/project' element={<Project />} />
          <Route path='/editproject/:id' element={<EditProject />} />
          <Route path='/blogsAdmin' element={<Blogs />} />
        </Route>
      </Route>

      <Route element={<Layout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
