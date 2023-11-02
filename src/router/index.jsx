import { Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../redux/slices/authSlice';
import Profile from '../pages/Profile';
import Error from '../pages/Error'

export default function Router() {
  return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/Profile" element={
              useSelector(selectAuthToken) ? <Profile /> : <Navigate to="/Login" />
            }/>
            <Route path="*" element={<Error />} />
        </Routes>
  );
}